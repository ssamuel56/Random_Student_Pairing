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
  studentlist = params[:studentlist]
  paired_students = student_sample(params[:studentlist].chop.split(','))
  erb :paired, locals: {paired_students: paired_students, studentlist: studentlist}
end

post '/newpair' do
studentlist = params[:studentlist]
  redirect 'newpair?studentlist=' + studentlist
end

get '/newpair' do
  studentlist = params[:studentlist]
  studentlist = student_sample(params[:studentlist].chop.split(','))
  erb :newpair, locals: {studentlist: studentlist}
end
