class OrderMailer < ApplicationMailer
	default from: 'mr.zaur22@gmail.com'
	def send_email(order_type, name, number, color)
		@name = name
		@number = number
		@type = order_type
		@color = color
		mail(to: "3dpen@bk.ru", subject: "Заказ! #{order_type} !")	
	end
end
