# Python3 program to implement
# the above approach

# Structure of Trie
class TrieNode:

	# Function to initialize
	# a Trie Node
	def __init__(self):	
		self.child = [None, None]
		self.cnt = 0

# Function to insert a number into Trie
def insertTrie(root, N):
	
	# Traverse binary representation of X.
	for i in range(31, -1, -1):
			
		# Stores ith bit of N
		x = bool( (N) & (1 << i));
		
		# Check if an element already
		# present in Trie having ith bit x.
		if(root.child[x] == None):
			
			# Create a new node of Trie.
			root.child[x] = TrieNode();
				
		# Update count of elements
		# whose ith bit is x
		root.child[x].cnt += 1;
		
		# Update root.
		root= root.child[x];

# Function to count elements
# in Trie whose XOR with N
# less than K
def cntSmaller(root, N, K):
	
	# Stores count of elements
	# whose XOR with N exceeding K
	cntPairs = 0;
	
	# Traverse binary representation
	# of N and K in Trie
	for i in range(31, -1, -1):	
		if(root == None):
			break
									
		# Stores ith bit of N						
		x = bool(N & (1 << i))
		
		# Stores ith bit of K
		y = K & (1 << i);
		
		# If the ith bit of K is 1
		if (y != 0):
			
			# If an element already
			# present in Trie having
			# ith bit (1 - x)
			if (root.child[x]):

				# Update cntPairs
				cntPairs += root.child[ x].cnt

			# Update root.
			root = root.child[1 - x];
		
		# If the ith bit of K is 0
		else:
			
			# Update root.
			root = root.child[x]
	return cntPairs;

# Function to count pairs that
# satisfy the given conditions.
def cntSmallerPairs(arr, N, K):
	
	# Create root node of Trie
	root = TrieNode();
	
	# Stores count of pairs that
	# satisfy the given conditions
	cntPairs = 0;
	
	# Traverse the given array.
	for i in range(N):
		
		# Update cntPairs
		cntPairs += cntSmaller(root, arr[i], K);
		
		# Insert arr[i] into Trie.
		insertTrie(root, arr[i]);
	return cntPairs;

# Driver code
if __name__=='__main__':
	arr = [3, 5, 6, 8]
	K= 7;
	N = len(arr)	
	print(cntSmallerPairs(arr, N, K))

	# This code is contributed by rutvik_56
