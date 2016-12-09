class PagesController < ApplicationController
  def index
  end

  def order
  	OrderMailer.send_email(params[:type], params[:name], params[:number], params[:color]).deliver
  	
    str = params[:type][0..2] + " " + params[:name] + " " + params[:number] + params[:color][0..2]
  	#message = MainsmsApi::Message.new(sender: 'Marker3D', message: str, recipients: ['89285512244', '89254166678', '89896538625'])
  	#response = message.deliver
  end

private
	def mail_params
		params.permit(:name, :number, :type, :color)
	end
end
