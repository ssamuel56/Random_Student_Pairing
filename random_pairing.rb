def student_sample(students)
  ary = []
  pairs_to_be_paired = students.shuffle.each_slice(2)
  pairs_to_be_paired.each do |x|
    # p x
    if x.length == 2
      ary << x
    else
      if ary.empty?
        ary << x
      else
        ary[rand(ary.length)].concat(x)
      end
    end
  end
  return ary
end
