class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages_channel'
  end

  def receive(data)
    message = Message.create! content: data["content"]
    ActionCable.server.broadcast "messages_channel", message.as_json
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
