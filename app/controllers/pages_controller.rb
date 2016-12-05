class PagesController < ApplicationController
  def index
  end

  def order
  	OrderMailer.send_email(params[:type], params[:name], params[:number], params[:color]).deliver
  end

private
	def mail_params
		params.permit(:name, :number, :type, :color)
	end
end
