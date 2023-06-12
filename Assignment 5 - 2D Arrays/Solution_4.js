// 💡 **Question 4**

// Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// **Note** that the integers in the lists may be returned in **any** order.

// **Example 1:**

// **Input:** nums1 = [1,2,3], nums2 = [2,4,6]

// **Output:** [[1,3],[4,6]]

// **Explanation:**

// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

// solution -->

function findDisappearedNumbers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer = [[], []];

  for (let num of nums1) {
    if (!set2.has(num)) {
      answer[0].push(num);
    }
  }

  for (let num of nums2) {
    if (!set1.has(num)) {
      answer[1].push(num);
    }
  }

  return answer;
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const answer = findDisappearedNumbers(nums1, nums2);
console.log(answer);
