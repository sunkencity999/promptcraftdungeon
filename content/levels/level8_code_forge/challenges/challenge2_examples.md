# Debugging Prompt Examples

## Basic Debugging Prompts

### Example 1: Simple Bug Fix

**Prompt:**
```
As a JavaScript developer, debug this function that should calculate the average of an array of numbers but sometimes returns incorrect results:

```javascript
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
```

Identify the bugs, fix the code, and explain each issue you found.
```

**Why it works:**
- Defines the role (JavaScript developer)
- Provides the problematic code
- Describes the expected behavior
- Specifies what's wrong (incorrect results)
- Requests identification, fixes, and explanations

### Example 2: Error Handling Fix

**Prompt:**
```
As a Python programmer, debug this function that attempts to read data from a file but crashes when the file doesn't exist:

```python
def read_config_file(filename):
    file = open(filename, 'r')
    data = file.read()
    file.close()
    return data
```

Fix the code to properly handle file-not-found errors by returning None and printing an error message. Explain your changes and why they're necessary.
```

**Why it works:**
- Specifies the role (Python programmer)
- Provides the problematic code
- Identifies the specific issue (crashes on missing file)
- Specifies the desired error handling behavior
- Requests explanation of changes

## Intermediate Debugging Prompts

### Example 3: Security Vulnerability Fix

**Prompt:**
```
As a security engineer, analyze and fix the security vulnerabilities in this Node.js authentication function:

```javascript
function authenticateUser(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  
  db.query(query, (err, results) => {
    if (err) throw err;
    
    if (results.length > 0) {
      req.session.user = results[0];
      res.redirect('/dashboard');
    } else {
      res.send('Incorrect username or password');
    }
  });
}
```

Identify all security issues (including SQL injection, password storage, error handling, and information disclosure), fix each vulnerability following OWASP guidelines, and provide a detailed explanation of each issue and its solution. Include recommendations for additional security measures.
```

**Why it works:**
- Specifies specialized role (security engineer)
- Provides code with multiple security issues
- Identifies specific vulnerability categories to look for
- References specific standards (OWASP)
- Requests detailed explanations
- Asks for additional recommendations

### Example 4: Performance Debugging

**Prompt:**
```
As a performance optimization specialist, debug this React component that renders a large list and causes performance issues:

```jsx
function LargeList({ items }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  
  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search..." />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>{new Date(item.timestamp).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Identify performance bottlenecks, implement optimizations using React best practices (memoization, virtualization, etc.), and explain the performance impact of each change. Include before/after complexity analysis where relevant.
```

**Why it works:**
- Specifies specialized role (performance optimization specialist)
- Provides code with performance issues
- Suggests specific optimization techniques to consider
- Requests explanations of performance impact
- Asks for complexity analysis

## Advanced Debugging Prompts

### Example 5: Concurrency Bug Fix

**Prompt:**
```
As a multithreading expert, debug this Java code that manages a connection pool and suffers from thread safety issues:

```java
public class ConnectionPool {
    private List<Connection> connections = new ArrayList<>();
    private int maxConnections = 10;
    
    public ConnectionPool() {
        for (int i = 0; i < maxConnections; i++) {
            connections.add(createNewConnection());
        }
    }
    
    public Connection getConnection() {
        if (connections.size() > 0) {
            Connection conn = connections.remove(connections.size() - 1);
            return conn;
        }
        return createNewConnection();
    }
    
    public void releaseConnection(Connection conn) {
        if (connections.size() < maxConnections) {
            connections.add(conn);
        } else {
            conn.close();
        }
    }
    
    private Connection createNewConnection() {
        // Implementation omitted
        return new Connection();
    }
}
```

Identify all concurrency issues (race conditions, thread safety problems), fix them using appropriate synchronization mechanisms, explain the problems and solutions in detail, and discuss the tradeoffs of different possible approaches (synchronized methods, locks, concurrent collections, etc.). Consider both correctness and performance in your solution.
```

**Why it works:**
- Specifies highly specialized role (multithreading expert)
- Provides code with subtle concurrency issues
- Requests identification of specific types of concurrency bugs
- Asks for solutions using appropriate techniques
- Requires detailed explanations
- Requests discussion of alternative approaches
- Specifies multiple evaluation criteria (correctness and performance)

### Example 6: System Integration Debugging

**Prompt:**
```
As a full-stack developer, debug this e-commerce checkout system that has integration issues between the frontend, API, and payment processor:

Frontend (React):
```jsx
function Checkout({ cart }) {
  const [processing, setProcessing] = useState(false);
  
  async function handleCheckout() {
    setProcessing(true);
    try {
      const order = await createOrder(cart);
      const payment = await processPayment(order.id, cart.total);
      window.location = `/confirmation/${order.id}`;
    } catch (error) {
      alert('Payment failed: ' + error.message);
    }
    setProcessing(false);
  }
  
  return (
    <button onClick={handleCheckout} disabled={processing}>
      {processing ? 'Processing...' : 'Complete Purchase'}
    </button>
  );
}
```

API (Node.js):
```javascript
app.post('/api/orders', async (req, res) => {
  const { cart } = req.body;
  const order = await db.orders.create({
    userId: req.user.id,
    items: cart.items,
    total: cart.total,
    status: 'pending'
  });
  res.json(order);
});

app.post('/api/payments', async (req, res) => {
  const { orderId, amount } = req.body;
  const order = await db.orders.findById(orderId);
  
  const payment = await paymentProcessor.charge({
    amount: amount,
    currency: 'usd',
    description: `Order ${orderId}`,
    source: req.body.token
  });
  
  order.status = 'paid';
  order.paymentId = payment.id;
  await order.save();
  
  res.json({ success: true });
});
```

Identify all integration issues, race conditions, error handling problems, and state management bugs across the system. Fix each issue, ensuring proper synchronization between components, robust error handling, and appropriate user feedback. Explain each problem and solution, considering both technical correctness and user experience.
```

**Why it works:**
- Specifies cross-domain role (full-stack developer)
- Provides code from multiple system components
- Focuses on integration between components
- Requests identification of various issue types
- Specifies multiple aspects to fix (synchronization, error handling, user feedback)
- Requires explanations for each issue
- Includes multiple evaluation criteria (technical correctness and UX)

## Common Mistakes and Improvements

### Weak Prompt:
```
Fix this code:

function add(a, b) {
  return a + b
}
```

**Problems:**
- No specified role
- No description of what's wrong
- No context about what the code should do
- No requirements for the fix
- No request for explanations

### Improved Prompt:
```
As a JavaScript developer, review and debug this addition function:

```javascript
function add(a, b) {
  return a + b
}
```

While this function works for numbers, it has issues when used with strings or when one parameter is missing. Fix the function to:
1. Ensure it only accepts numbers and converts string numbers to actual numbers
2. Return 0 if any parameter is missing or cannot be converted to a number
3. Add proper JSDoc documentation including parameter types and return value
4. Include input validation with descriptive error messages

Explain each issue you find and the reasoning behind your fixes. Include examples of how the function would behave before and after your changes with different inputs.
```

**Improvements:**
- Added specific role (JavaScript developer)
- Described the specific issues (strings, missing parameters)
- Provided clear requirements for the fix
- Added quality requirements (documentation, validation)
- Requested explanations and examples
