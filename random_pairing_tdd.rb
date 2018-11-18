require_relative 'random_pairing.rb'
require 'minitest/autorun'

class Test_for_random_pairing < Minitest::Test
  def test_1for1
    assert_equal(1,1)
  end
  def test_for_only_one
    pairs = student_sample(["Samuel"])
    assert_equal(1, pairs.count)
  end
  def test_for_first_pair
    pairs = student_sample(["Sam", "Steven"])
    assert_equal(1, pairs.count)
  end
  def test_for_2_pairs
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack"])
    assert_equal(2, pairs.count)
  end
  def test_for_2_pairs_w_extra
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack", "Garry"])
    assert_equal(2, pairs.count)
  end
  def test_for_3_pairs_
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack", "Garry", "Josh"])
    assert_equal(3, pairs.count)
  end
  def test_for_3_pairs_w_an_extra
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack", "Garry", "Josh", "Scott"])
    assert_equal(3, pairs.count)
  end
  def test_for_4_pairs
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack", "Garry", "Josh", "Scott", "Josh"])
    assert_equal(4, pairs.count)
  end
  def test_for_6_pairs
    pairs = student_sample(["Sam", "Steven", "Tracey", "Billyjack", "Garry", "Josh", "Scott", "Josh", "Ricky", "Sally", "Kelly", "Hank"])
    assert_equal(6, pairs.count)
  end
end
