import OpenAI from 'openai';

// Initialize OpenAI client with API key from environment variable
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

export interface StudyInfo {
  condition: string;
  location: string;
  compensation?: string;
  ageRange?: {
    min?: number;
    max?: number;
  };
  gender?: string;
  additionalDetails?: string;
}

export interface GeneratedAds {
  google: {
    headlines: string[];
    descriptions: string[];
  };
  facebook: {
    headlines: string[];
    descriptions: string[];
  };
  display: {
    headlines: string[];
    descriptions: string[];
  };
}

export async function generateAds(studyInfo: StudyInfo): Promise<GeneratedAds> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert in clinical trial advertising and IRB compliance. Generate ad copy based on the study information. Create:

          1. Google Ads (3 headlines, 2 descriptions)
             - Headlines: Max 30 characters
             - Descriptions: Max 90 characters
             
          2. Facebook Ads (3 headlines, 2 descriptions)
             - Headlines: Max 40 characters
             - Descriptions: Max 125 characters
             
          3. Display Ads (3 headlines, 2 descriptions)
             - Headlines: Max 35 characters
             - Descriptions: Max 100 characters

          Ensure all copy is:
          - IRB compliant (no promotional language)
          - Clear and informative
          - Focused on patient benefits
          - Inclusive and respectful
          
          Format your response as a JSON object with this exact structure:
          {
            "google": {
              "headlines": ["headline1", "headline2", "headline3"],
              "descriptions": ["description1", "description2"]
            },
            "facebook": {
              "headlines": ["headline1", "headline2", "headline3"],
              "descriptions": ["description1", "description2"]
            },
            "display": {
              "headlines": ["headline1", "headline2", "headline3"],
              "descriptions": ["description1", "description2"]
            }
          }`
        },
        {
          role: "user",
          content: `Generate IRB-compliant ad copy based on this study information:
            ${JSON.stringify(studyInfo, null, 2)}`
        }
      ],
      temperature: 0.7
    });

    // Parse the response content as JSON
    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No content in response');
    }

    return JSON.parse(content) as GeneratedAds;
  } catch (error) {
    console.error('Error generating ads:', error);
    throw error;
  }
}