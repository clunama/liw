// This is an AI-powered agent demo interaction flow.
'use server';

/**
 * @fileOverview AI agent demo interaction flow.
 *
 * - aiAgentDemoInteraction - A function that allows users to interact with an AI agent demo.
 * - AiAgentDemoInteractionInput - The input type for the aiAgentDemoInteraction function.
 * - AiAgentDemoInteractionOutput - The return type for the aiAgentDemoInteraction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAgentDemoInteractionInputSchema = z.object({
  message: z.string().describe('The user message to the AI agent.'),
});
export type AiAgentDemoInteractionInput = z.infer<typeof AiAgentDemoInteractionInputSchema>;

const AiAgentDemoInteractionOutputSchema = z.object({
  response: z.string().describe('The AI agent response to the user message.'),
});
export type AiAgentDemoInteractionOutput = z.infer<typeof AiAgentDemoInteractionOutputSchema>;

export async function aiAgentDemoInteraction(input: AiAgentDemoInteractionInput): Promise<AiAgentDemoInteractionOutput> {
  return aiAgentDemoInteractionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAgentDemoInteractionPrompt',
  input: {schema: AiAgentDemoInteractionInputSchema},
  output: {schema: AiAgentDemoInteractionOutputSchema},
  prompt: `You are a helpful AI agent demo. Respond to the user message appropriately.\n\nUser Message: {{{message}}}`,
});

const aiAgentDemoInteractionFlow = ai.defineFlow(
  {
    name: 'aiAgentDemoInteractionFlow',
    inputSchema: AiAgentDemoInteractionInputSchema,
    outputSchema: AiAgentDemoInteractionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
