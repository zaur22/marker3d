class OrderMailer < ApplicationMailer
	default from: 'mr.zaur22@gmail.com'
	def send_email(order_type, name, number, color)
		@name = name
		@number = number
		@type = order_type
		@color = color
		mail(to: "info@marker3D.ru", subject: "Заказ! #{order_type} !")
	end
end
