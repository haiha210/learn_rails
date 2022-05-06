# frozen_string_literal: true

module Api
  module V1
    class MessagesController < ApplicationController
      def index
        messages = Message.all
        render json: messages
      end

      def create
        message = Message.new(message_params)
        message.save!
        ActionCable.server.broadcast 'messages_channel', message.as_json
        head :ok
      end

      private

      def message_params
        params.require(:message).permit(:content)
      end
    end
  end
end
