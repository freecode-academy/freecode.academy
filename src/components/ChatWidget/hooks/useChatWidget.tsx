import { ChatWidget } from '..'

const sendChatMessage = async (message: string): Promise<string> => {
  const { getMcpClient } = await import('src/lib/mcp/client')
  const client = getMcpClient()
  return client.sendMessage(message)
}

export function useChatWidget() {
  const chatWidget = (
    <ChatWidget
      welcomeTitle="Hi! How can I help?"
      welcomeText="Ask me anything about n8n-selfhost.dev project setup and usage."
      placeholder="Type your question..."
      onSendMessage={sendChatMessage}
    />
  )

  return { chatWidget }
}
