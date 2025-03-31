# Code Optimization Prompt Examples

## Basic Optimization Prompts

### Example 1: Simple Algorithm Optimization

**Prompt:**
```
As a JavaScript developer, optimize this function that finds the maximum value in an array. The current implementation is inefficient for large arrays:

```javascript
function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    let isMax = true;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      max = array[i];
    }
  }
  return max;
}
```

Improve the time complexity of this function while maintaining its functionality. Add comments explaining the performance improvements.
```

**Why it works:**
- Defines the role (JavaScript developer)
- Provides the inefficient code
- Identifies the specific issue (inefficient for large arrays)
- Requests a specific improvement (time complexity)
- Asks for explanatory comments

### Example 2: Memory Usage Optimization

**Prompt:**
```
As a Python programmer, optimize this function that processes a large dataset but uses excessive memory:

```python
def process_data(data_list):
    # Create multiple copies of the data
    processed = data_list.copy()
    results = []
    
    for item in processed:
        # Process each item and store all intermediate results
        intermediate_results = []
        for i in range(len(item)):
            intermediate_results.append(item[:i+1])
        
        # Only use the final result
        results.append(intermediate_results[-1])
    
    return results
```

Refactor this function to minimize memory usage while maintaining the same output. Add comments explaining your optimization approach and the memory benefits.
```

**Why it works:**
- Specifies the role (Python programmer)
- Provides code with a specific issue (excessive memory)
- Identifies what to optimize (memory usage)
- Requires maintaining functionality
- Requests explanatory comments

## Intermediate Optimization Prompts

### Example 3: Data Structure Optimization

**Prompt:**
```
As a performance engineer, optimize this JavaScript function that checks if a value exists in a large array of objects:

```javascript
function findUserById(users, id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  return null;
}

// Usage: Called frequently in a web application
// with an array that can contain thousands of user objects
```

Refactor this function to improve lookup performance, especially for repeated lookups of the same dataset. Consider appropriate data structures that would provide better time complexity. Implement your solution using modern JavaScript features, and include:
1. Time complexity analysis of both original and optimized versions
2. Memory trade-offs of your approach
3. Comments explaining the optimization techniques
4. Consideration for when this optimization would be most beneficial

Maintain readability and ensure the function interface remains unchanged.
```

**Why it works:**
- Specifies specialized role (performance engineer)
- Provides code with clear performance implications
- Includes usage context (frequent calls, large dataset)
- Suggests approach direction (data structures, time complexity)
- Specifies language features (modern JavaScript)
- Requests specific analysis components
- Adds constraints (readability, unchanged interface)

### Example 4: Loop and Calculation Optimization

**Prompt:**
```
As an optimization specialist, refactor this React component that renders a filterable, sortable table but performs poorly with large datasets:

```jsx
function DataTable({ data }) {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterText, setFilterText] = useState('');
  
  // Process data whenever any state changes
  const processedData = data
    .filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  
  function handleSort(field) {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  }
  
  return (
    <div>
      <input 
        type="text" 
        value={filterText} 
        onChange={e => setFilterText(e.target.value)} 
        placeholder="Filter by name" 
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('email')}>Email</th>
          </tr>
        </thead>
        <tbody>
          {processedData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

Optimize this component to improve rendering performance with datasets of 1000+ items. Focus on:
1. Preventing unnecessary re-calculations and re-renders
2. Efficient filtering and sorting approaches
3. Appropriate use of React hooks for performance (useMemo, useCallback)
4. Potential virtualization for large datasets

Maintain all existing functionality and user experience. Add performance-focused comments explaining each optimization technique and its impact. Include before/after rendering performance characteristics.
```

**Why it works:**
- Specifies specialized role (optimization specialist)
- Provides code with specific performance context (large datasets)
- Identifies the framework (React)
- Suggests specific optimization areas (re-calculations, hooks)
- Specifies techniques to consider (memoization, virtualization)
- Adds constraints (maintain functionality and UX)
- Requests explanatory comments and performance comparison

## Advanced Optimization Prompts

### Example 5: Full-Stack Optimization

**Prompt:**
```
As a full-stack performance engineer, optimize this e-commerce product listing system that has performance issues at scale:

Frontend (React):
```jsx
function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: false
  });
  
  useEffect(() => {
    // Fetch all products and filter client-side
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  
  const filteredProducts = products.filter(product => {
    return (
      (filters.category === '' || product.category === filters.category) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (!filters.inStock || product.stockCount > 0)
    );
  });
  
  return (
    <div>
      {/* Filter controls omitted for brevity */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

Backend (Node.js/Express):
```javascript
app.get('/api/products', (req, res) => {
  // Get all products from database
  db.collection('products').find({}).toArray((err, products) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(products);
  });
});
```

Database (MongoDB):
```javascript
// Products collection with 10,000+ items
// Each product has: id, name, description, price, category, stockCount, images
```

Optimize this system for a catalog of 10,000+ products with 1000+ concurrent users. Address both frontend and backend performance issues with a holistic approach. Include:

1. Frontend optimizations:
   - Implement pagination or infinite scrolling
   - Move filtering logic to the server
   - Optimize rendering performance
   - Add loading states and error handling

2. Backend optimizations:
   - Implement query optimization
   - Add appropriate indexing
   - Implement caching strategies
   - Optimize response payload size

3. API design improvements:
   - Redesign endpoints for efficient filtering and pagination
   - Consider GraphQL or specialized endpoints for different view types

For each optimization, explain:
- The performance problem it addresses
- The implementation approach
- Expected performance improvement
- Any trade-offs or considerations

Maintain all existing functionality while significantly improving loading times and responsiveness.
```

**Why it works:**
- Specifies specialized role (full-stack performance engineer)
- Provides code from multiple system layers
- Includes specific scale context (10,000+ products, 1000+ users)
- Identifies the complete technology stack
- Requests comprehensive optimization across all layers
- Provides structured categories for improvements
- Requires detailed explanations for each optimization
- Adds constraints (maintain functionality)

### Example 6: Algorithm Complexity Optimization

**Prompt:**
```
As an algorithms specialist, optimize this pathfinding function that currently has exponential time complexity:

```javascript
function findShortestPath(graph, start, end, visited = new Set(), path = []) {
  // Add current node to path and visited set
  path.push(start);
  visited.add(start);
  
  // Base case: reached the end
  if (start === end) {
    return path;
  }
  
  let shortestPath = null;
  
  // Try all neighbors
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      const newPath = findShortestPath(graph, neighbor, end, new Set(visited), [...path]);
      
      // Update shortest path if this path is shorter
      if (newPath && (!shortestPath || newPath.length < shortestPath.length)) {
        shortestPath = newPath;
      }
    }
  }
  
  return shortestPath;
}
```

Refactor this function to use an efficient algorithm with polynomial time complexity (e.g., Dijkstra's, A*, BFS). Your optimization should:

1. Dramatically improve time complexity for large graphs
2. Reduce memory usage by avoiding unnecessary copying
3. Maintain the ability to find the shortest path correctly
4. Include detailed comments explaining:
   - The algorithm chosen and why
   - The time and space complexity analysis
   - Key optimization techniques applied
   - Edge cases and how they're handled

5. Include a comparison table showing complexity differences between the original and optimized versions

Prioritize correctness and asymptotic efficiency over minor optimizations. The solution should work for graphs with thousands of nodes and edges.
```

**Why it works:**
- Specifies highly specialized role (algorithms specialist)
- Provides code with clear algorithmic inefficiency
- Identifies specific issue (exponential time complexity)
- Suggests specific alternative algorithms
- Lists detailed requirements for the solution
- Requests comprehensive documentation and analysis
- Specifies evaluation criteria (correctness, asymptotic efficiency)
- Includes scale context (thousands of nodes)

## Common Mistakes and Improvements

### Weak Prompt:
```
Make this code faster:

function sortData(data) {
  // Bubble sort
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}
```

**Problems:**
- No specified role
- Vague request ("make faster")
- No context about data size or performance requirements
- No guidance on optimization approach
- No requirements for documentation or explanation
- No quality constraints

### Improved Prompt:
```
As a performance optimization engineer, refactor this sorting function that currently uses bubble sort with O(n²) time complexity:

```javascript
function sortData(data) {
  // Bubble sort
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}
```

Optimize this function to:
1. Improve time complexity from O(n²) to O(n log n) or better
2. Maintain the same function signature for backward compatibility
3. Work correctly with numeric arrays, string arrays, and empty arrays
4. Use modern JavaScript features and built-in methods where appropriate

Include detailed comments explaining:
- The algorithm or method chosen and why
- The time and space complexity analysis
- Any trade-offs made in your implementation

Also add a brief performance comparison showing approximate speed improvement for arrays of different sizes (small, medium, large).

Prioritize readability alongside performance - the optimized code should be both efficient and maintainable.
```

**Improvements:**
- Added specific role (performance optimization engineer)
- Identified the current algorithm and its complexity
- Specified target complexity improvement
- Added compatibility requirements
- Specified input types to support
- Suggested language features to consider
- Required detailed explanations and analysis
- Added performance comparison requirement
- Included quality constraint (readability)
