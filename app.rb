require 'sinatra'
require_relative 'random_pairing.rb'

get '/' do
  erb :pairing
end

post '/pair' do
  studentlist = params[:studentlist]
  p studentlist
  redirect 'paired?studentlist=' + studentlist
end

get '/paired' do
  studentlist = params[:studentlist]
  erb :paired, locals: {studentlist: studentlist}
end
