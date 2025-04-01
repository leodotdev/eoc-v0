// This file is necessary to avoid TypeScript errors when using Resend
// It provides a bare-bones type declaration for the 'resend' module
declare module 'resend' {
  export class Resend {
    constructor(apiKey: string);
    
    emails: {
      send: (options: {
        from: string;
        to: string | string[];
        subject: string;
        html?: string;
        text?: string;
        reply_to?: string;
        cc?: string | string[];
        bcc?: string | string[];
        attachments?: any[];
        headers?: Record<string, string>;
        tags?: Array<{ name: string; value: string }>;
      }) => Promise<{
        data: { id: string } | null;
        error: Error | null;
      }>;
    };
  }
} 