# Solution 1: input limit fixed
sum = 0
limit = 1000

for i in sum..limit
	sum += i if (i%3 == 0 || i%5 == 0)
end
puts sum

# Solution 2: user input
sum = 0

puts "What do you want the limit to be?"
limit = gets.chomp.to_i

for i in sum..limit
	sum += i if (i%3 == 0 || i%5 == 0)
end
puts sum