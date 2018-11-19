require 'sinatra'
require_relative 'random_pairing.rb'

get '/' do
  erb :pairing
end

post '/pair' do
  studentlist = params[:studentlist]
  if studentlist.empty?
    redirect'/'
  end
  redirect 'paired?studentlist=' + studentlist
end

get '/paired' do
  studentlist = student_sample(params[:studentlist].chop.split(','))
  erb :paired, locals: {studentlist: studentlist}
end
