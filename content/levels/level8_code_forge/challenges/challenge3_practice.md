# Code Optimization Prompt Engineering Practice Exercises

## Exercise 1: Optimization Prompt Analysis

Analyze the following code optimization prompts and identify which elements make them effective or ineffective:

1. "Make my code faster."

2. "Optimize this Python function that calculates Fibonacci numbers. It currently has exponential time complexity and becomes extremely slow for inputs larger than 35. I need a solution with linear time complexity that can handle inputs up to n=1000 efficiently. Here's my current implementation:
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
Please provide an optimized version with detailed explanations of the optimization techniques used, the resulting time and space complexity, and benchmarks comparing the performance of both implementations for various input sizes."

3. "Fix my slow JavaScript code."

4. "I need to optimize this SQL query that's taking over 30 seconds to run on a table with approximately 2 million records. The query is meant to find customers who have made purchases in multiple product categories within the last 90 days. Here's my current query:
```sql
SELECT c.customer_id, c.name, c.email
FROM customers c
WHERE (
    SELECT COUNT(DISTINCT p.category_id)
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.product_id
    WHERE o.customer_id = c.customer_id
    AND o.order_date >= DATE_SUB(CURRENT_DATE, INTERVAL 90 DAY)
) > 1
ORDER BY c.customer_id;
```
I've already verified that all relevant columns (customer_id, order_id, product_id, category_id) are indexed. Please analyze potential performance issues, suggest optimization strategies, and provide a revised query that would execute more efficiently."

5. "Help me improve my code."

**Questions to consider:**
- Which prompts clearly define the performance problem?
- Which prompts include specific performance goals or requirements?
- Which prompts provide context about the current implementation and its limitations?
- How do the detailed prompts enable more effective optimization assistance?

## Exercise 2: Performance Context Enhancement

Enhance the following basic optimization prompts by adding specific context about the performance issues, code examples, current metrics, and optimization goals:

1. "My sorting algorithm is too slow."

2. "This API endpoint can't handle many requests."

3. "My image processing function uses too much memory."

4. "This database query times out for large datasets."

5. "My mobile app drains battery too quickly."

**Example enhancement:**
- Basic: "My web page loads slowly."
- Enhanced: "My e-commerce product listing page has a slow initial load time of 4.5 seconds and poor Lighthouse performance score of 62/100. The page displays a grid of 24 product cards, each with an image, title, price, and rating. The main performance bottleneck appears to be render-blocking JavaScript and large image files. Here's the current structure of my product card component:

```javascript
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <div className="product-rating">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= product.rating ? 'star filled' : 'star'}>★</span>
        ))}
        <span className="rating-count">({product.ratingCount})</span>
      </div>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
```

I need to optimize this page to achieve a load time under 2 seconds and a Lighthouse performance score above 85, while maintaining the current visual design. Please suggest specific front-end optimization techniques for this component and the overall page structure, with code examples where appropriate."

## Exercise 3: Optimization Approach Specification

For each of the following performance scenarios, create a prompt that specifically requests a particular optimization approach or methodology:

1. Algorithmic complexity optimization for a data processing function

2. Memory usage optimization for a mobile application

3. Database query performance optimization

4. Frontend rendering performance optimization

5. API response time optimization

**Example:**
"I need to optimize the algorithmic complexity of this Python function that finds all pairs of numbers in an array that sum to a target value. The current implementation has O(n²) time complexity, which is too slow for arrays with more than 10,000 elements. I need an approach that achieves O(n) time complexity.

Here's my current implementation:
```python
def find_pairs(numbers, target_sum):
    result = []
    for i in range(len(numbers)):
        for j in range(i+1, len(numbers)):
            if numbers[i] + numbers[j] == target_sum:
                result.append((numbers[i], numbers[j]))
    return result
```

Example usage:
```python
numbers = [3, 1, 5, 7, 9, 2, 6]
target_sum = 8
pairs = find_pairs(numbers, target_sum)  # Should return [(3, 5), (1, 7), (2, 6)]
```

Please optimize this function using a hash table / dictionary approach to achieve O(n) time complexity. In your solution, please:
1. Explain the mathematical/algorithmic principle behind the optimization
2. Provide the optimized code with comments explaining key steps
3. Analyze the time and space complexity of your solution
4. Discuss any trade-offs or edge cases to consider (like handling duplicates)
5. Suggest how to benchmark and verify the performance improvement"

## Exercise 4: Multi-Dimensional Optimization

Create optimization prompts for scenarios that require balancing multiple performance dimensions:

1. Optimizing both speed and memory usage in a data processing pipeline

2. Balancing rendering performance and visual quality in a graphics application

3. Optimizing both query performance and data consistency in a database system

4. Balancing API response time and server resource utilization

5. Optimizing both compilation time and runtime performance of a program

**Example:**
"I need to optimize a data processing pipeline that analyzes large sensor datasets (typically 500MB-2GB) for anomaly detection in industrial equipment. The pipeline needs to balance two competing optimization goals: processing speed and memory efficiency, as it runs on edge devices with limited resources (4GB RAM, quad-core ARM processor).

Here's a simplified version of the current implementation:
```python
def process_sensor_data(data_path):
    # Load entire dataset into memory
    full_dataset = pd.read_csv(data_path)
    
    # Preprocessing steps
    processed_data = preprocess_dataset(full_dataset)
    
    # Feature extraction (creates multiple intermediate dataframes)
    time_features = extract_time_domain_features(processed_data)
    freq_features = extract_frequency_domain_features(processed_data)
    stat_features = extract_statistical_features(processed_data)
    
    # Combine all features
    all_features = pd.concat([time_features, freq_features, stat_features], axis=1)
    
    # Run anomaly detection model
    anomalies = detect_anomalies(all_features)
    
    return anomalies

def preprocess_dataset(dataset):
    # Various preprocessing steps that create copies of the data
    dataset_cleaned = remove_outliers(dataset)
    dataset_normalized = normalize_signals(dataset_cleaned)
    dataset_filtered = apply_filters(dataset_normalized)
    return dataset_filtered

# Similar implementations for other functions...
```

The current implementation has these performance characteristics:
- Processing time: ~45 seconds for a 1GB dataset
- Peak memory usage: ~3.5GB (dangerously close to our 4GB limit)
- CPU utilization: ~60% across all cores

I need to optimize this pipeline to:
1. Reduce peak memory usage to under 2GB
2. Maintain or improve the current processing time
3. Better utilize all CPU cores

Please provide an optimized approach that balances these requirements, with specific attention to:
- Techniques for processing the data in chunks rather than loading it all at once
- Methods to reduce unnecessary data copies and intermediate storage
- Opportunities for parallelization without excessive memory overhead
- Algorithmic improvements that might reduce computational complexity
- Proper resource management and cleanup

Include code examples for the key optimized functions and explain the expected impact on both memory usage and processing time."

## Exercise 5: Language/Framework-Specific Optimization

Create optimization prompts tailored to specific programming languages or frameworks, incorporating their unique performance characteristics and best practices:

1. Python data processing optimization using NumPy/Pandas

2. React component rendering optimization

3. SQL query and database schema optimization

4. C++ memory and CPU optimization

5. TensorFlow/PyTorch model inference optimization

**Example:**
"I need to optimize the rendering performance of this React component that displays and filters a large dataset (5,000+ items) in a sortable, filterable table. Users are experiencing lag when sorting columns, applying filters, or scrolling through the data. The component re-renders too frequently and becomes increasingly sluggish as more data is loaded.

Here's my current implementation:
```jsx
function DataTable({ data }) {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 50;
  
  // Apply filters to data
  const filteredData = data.filter(item => {
    return Object.entries(filters).every(([field, value]) => {
      if (!value) return true;
      return item[field].toLowerCase().includes(value.toLowerCase());
    });
  });
  
  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  // Paginate data
  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value
    });
    setCurrentPage(1);
  };
  
  return (
    <div>
      {/* Filter inputs */}
      <div className="filters">
        {Object.keys(data[0] || {}).map(field => (
          <input
            key={field}
            placeholder={`Filter by ${field}`}
            value={filters[field] || ''}
            onChange={(e) => handleFilterChange(field, e.target.value)}
          />
        ))}
      </div>
      
      {/* Table */}
      <table>
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map(field => (
              <th key={field} onClick={() => handleSort(field)}>
                {field}
                {sortField === field && (
                  <span>{sortDirection === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage} of {Math.ceil(sortedData.length / pageSize)}</span>
        <button
          disabled={currentPage === Math.ceil(sortedData.length / pageSize)}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

Please optimize this component using React-specific performance techniques, focusing on:
1. Preventing unnecessary re-renders using memoization (React.memo, useMemo, useCallback)
2. Implementing virtualization for rendering only visible rows
3. Optimizing state management to minimize render cycles
4. Improving the efficiency of sorting and filtering operations
5. Using appropriate React hooks for performance optimization

Provide a fully optimized version of the component with comments explaining each optimization technique and its specific impact on performance. Also suggest how to measure the performance improvement using React DevTools or other profiling methods."

## Exercise 6: Comprehensive Optimization Framework

Create a comprehensive prompt template for complex optimization scenarios that guides the optimization process through multiple stages:

1. Performance profiling and bottleneck identification
2. Optimization strategy selection
3. Implementation approach
4. Testing and validation
5. Trade-off analysis

**Example:**
"# Code Optimization Request

## Current Implementation and Performance Issue

I have a [type of application/system/algorithm] that is experiencing performance issues with [specific metric: time/memory/resource usage]. Here's the current implementation:

```[language]
[code block with the current implementation]
```

Current performance metrics:
- Execution time: [measurement]
- Memory usage: [measurement]
- [Other relevant metrics]

Test case that demonstrates the issue:
```
[Example input/scenario that shows the performance problem]
```

## Performance Requirements

I need to optimize this code to meet the following targets:
- Execution time: [target]
- Memory usage: [target]
- [Other requirements]

Constraints that must be maintained:
- [Functional requirements that cannot change]
- [Compatibility requirements]
- [Other constraints]

## Profiling Information

I've identified these potential bottlenecks through profiling:
1. [Bottleneck 1] - [% of time/resources]
2. [Bottleneck 2] - [% of time/resources]
3. [...]

## Optimization Approaches I've Considered

I've already explored these optimization strategies:
1. [Approach 1] → Result: [outcome]
2. [Approach 2] → Result: [outcome]
3. [...]

## Specific Optimization Guidance Requested

I'm looking for optimization in these specific areas:
1. [Area of focus 1]
2. [Area of focus 2]
3. [...]

Please provide:
- Analysis of the primary performance bottlenecks
- Recommended optimization strategies with explanation of the underlying principles
- Optimized implementation with comments explaining the changes
- Expected performance improvements for each optimization
- Potential trade-offs or side effects to consider
- Suggestions for validating and measuring the optimization results

Thank you!"
