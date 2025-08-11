// lib/greenApi.ts - Green API WhatsApp Integration
interface GreenApiConfig {
  idInstance: string;
  apiTokenInstance: string;
  baseUrl: string;
}

interface SendMessageRequest {
  chatId: string; // Phone number with country code (e.g., "919820142424@c.us")
  message: string;
}

interface SendMessageResponse {
  idMessage: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class GreenApiClient {
  private config: GreenApiConfig;

  constructor(config: GreenApiConfig) {
    this.config = config;
  }

  private getApiUrl(method: string): string {
    return `${this.config.baseUrl}/waInstance${this.config.idInstance}/${method}/${this.config.apiTokenInstance}`;
  }

  /**
   * Format phone number for WhatsApp (add country code and @c.us)
   */
  private formatPhoneNumber(phone: string, countryCode: string = '91'): string {
    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Add country code if not present
    const phoneWithCountryCode = cleanPhone.startsWith(countryCode) 
      ? cleanPhone 
      : `${countryCode}${cleanPhone}`;
    
    return `${phoneWithCountryCode}@c.us`;
  }

  /**
   * Send a text message to WhatsApp
   */
  async sendMessage(phoneNumber: string, message: string): Promise<ApiResponse<SendMessageResponse>> {
    try {
      const chatId = this.formatPhoneNumber(phoneNumber);
      
      const response = await fetch(this.getApiUrl('sendMessage'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId,
          message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        return {
          success: false,
          error: `HTTP ${response.status}: ${errorData}`,
        };
      }

      const data = await response.json();
      
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Send messages to multiple phone numbers
   */
  async sendBulkMessages(
    phoneNumbers: string[], 
    message: string,
    delayBetweenMessages: number = 2000 // 2 seconds delay
  ): Promise<ApiResponse<Array<{ phone: string; success: boolean; messageId?: string; error?: string }>>> {
    const results = [];

    for (let i = 0; i < phoneNumbers.length; i++) {
      const phone = phoneNumbers[i];
      
      try {
        const result = await this.sendMessage(phone, message);
        
        results.push({
          phone,
          success: result.success,
          messageId: result.data?.idMessage,
          error: result.error,
        });

        // Add delay between messages to avoid rate limiting
        if (i < phoneNumbers.length - 1) {
          await new Promise(resolve => setTimeout(resolve, delayBetweenMessages));
        }
      } catch (error) {
        results.push({
          phone,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    const successCount = results.filter(r => r.success).length;
    
    return {
      success: successCount > 0,
      data: results,
    };
  }

  /**
   * Check if the instance is authorized (QR code scanned)
   */
  async getStateInstance(): Promise<ApiResponse<{ stateInstance: string }>> {
    try {
      const response = await fetch(this.getApiUrl('getStateInstance'));
      
      if (!response.ok) {
        return {
          success: false,
          error: `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      const data = await response.json();
      
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Get account information
   */
  async getSettings(): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(this.getApiUrl('getSettings'));
      
      if (!response.ok) {
        return {
          success: false,
          error: `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      const data = await response.json();
      
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
}

// Create and export a singleton instance
const greenApiClient = new GreenApiClient({
  idInstance: process.env.GREEN_API_ID_INSTANCE!,
  apiTokenInstance: process.env.GREEN_API_TOKEN_INSTANCE!,
  baseUrl: process.env.GREEN_API_BASE_URL || 'https://api.green-api.com',
});

export default greenApiClient;

// Export types for use in other files
export type { ApiResponse, SendMessageResponse, GreenApiConfig };