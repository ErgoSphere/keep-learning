/**
 * Created by ErgoSphere on 2021/3/3
 *
 * [3,2,3,4,6,5]
 *
 * [3, 1]
 **/

var findErrorNums = function(nums) {
  let a = [], temp = [], min = Math.min(...nums), max = Math.max(...nums), nums_set = new Set(nums)
  let cur = min
  while(nums.length) {
    let value = nums[0]
    if (temp.indexOf(value) > -1) {
      a.push(value)
      break
    } else {
      nums.splice(0, 1)
      temp.push(value)
    }
  }
  while(cur <= max) {
    if (!nums_set.has(cur)) {
      a.push(cur)
      break
    }
    cur++
  }
  if (a.length < 2) {
    if (min === 1) {
      a.push(max+1)
    } else {
      a.push(min - 1)
    }
  }

  return a
};

console.log(findErrorNums([3,2,3,4,6,5]))