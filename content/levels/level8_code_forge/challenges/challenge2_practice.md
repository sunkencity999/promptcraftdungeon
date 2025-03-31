# Debugging Prompt Engineering Practice Exercises

## Exercise 1: Debugging Prompt Analysis

Analyze the following debugging prompts and identify which elements make them effective or ineffective:

1. "Fix my code."

2. "Debug this Python function that's supposed to merge two sorted arrays into a single sorted array, but it's producing incorrect results for some inputs. The function is returning duplicated elements and sometimes missing values. Here's the code:
```python
def merge_sorted_arrays(arr1, arr2):
    result = []
    i = j = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result
```
I've tested it with these inputs:
- merge_sorted_arrays([1, 3, 5], [2, 4, 6]) returns [1, 2, 3, 4, 5, 6] (correct)
- merge_sorted_arrays([1, 3, 5], [1, 3, 5]) returns [1, 1, 3, 3, 5, 5] (incorrect - should handle duplicates)
- merge_sorted_arrays([], [2, 4, 6]) returns [2, 4, 6] (correct)
Please identify the bug, explain why it's happening, and provide a corrected version of the function."

3. "My JavaScript code isn't working."

4. "I'm debugging a React component that's causing performance issues. The component re-renders too frequently, especially when items are added to or removed from the list it displays. Here's the component code:
```jsx
function ItemList({ items, onItemSelect }) {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const handleSelect = (item) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(item.id)) {
      const index = newSelectedItems.indexOf(item.id);
      newSelectedItems.splice(index, 1);
    } else {
      newSelectedItems.push(item.id);
    }
    setSelectedItems(newSelectedItems);
    onItemSelect(newSelectedItems);
  };
  
  return (
    <div className="item-list">
      {items.map(item => (
        <div 
          key={item.id} 
          className={`item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
          onClick={() => handleSelect(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
```
The component is used in a parent component that passes a new array of items whenever the data changes. Please identify potential performance issues, explain why they're occurring, and suggest optimizations using React best practices."

5. "Help with my SQL query."

**Questions to consider:**
- Which prompts provide specific context about the problem?
- Which prompts include code examples and expected vs. actual behavior?
- Which prompts ask for specific types of assistance (identification, explanation, solution)?
- How do the detailed prompts enable more effective debugging assistance?

## Exercise 2: Bug Context Enhancement

Enhance the following basic debugging prompts by adding specific context about the problem, code examples, and expected vs. actual behavior:

1. "My sorting algorithm isn't working correctly."

2. "This database query is too slow."

3. "My API calls are failing intermittently."

4. "The CSS layout breaks on mobile devices."

5. "My authentication system sometimes logs users out unexpectedly."

**Example enhancement:**
- Basic: "My form validation isn't working."
- Enhanced: "My JavaScript form validation function isn't correctly validating email addresses. It's accepting invalid formats like 'user@domain' without a top-level domain and 'user@.com' without a domain name. Here's my current validation function:
```javascript
function validateEmail(email) {
  const atIndex = email.indexOf('@');
  if (atIndex > 0) {
    const domainPart = email.slice(atIndex + 1);
    return domainPart.length > 0;
  }
  return false;
}
```
I've tested it with these inputs:
- validateEmail('user@example.com') returns true (correct)
- validateEmail('user@domain') returns true (incorrect - missing TLD)
- validateEmail('user@.com') returns true (incorrect - missing domain name)
- validateEmail('user') returns false (correct)
Please identify the bug in my validation logic, explain why it's not catching these invalid formats, and provide a corrected version that properly validates email addresses according to standard formatting rules."

## Exercise 3: Debugging Approach Specification

For each of the following bug scenarios, create a prompt that specifically requests a particular debugging approach or methodology:

1. A memory leak in a mobile application

2. Inconsistent results from a machine learning model

3. Race conditions in a multi-threaded application

4. Cross-browser compatibility issues in a web application

5. Unexpected behavior in a recursive algorithm

**Example:**
"I'm experiencing a memory leak in my iOS Swift application that causes the app to crash after extended use, particularly when navigating between multiple view controllers. I'd like help debugging this issue using a systematic memory management analysis approach. Here's a simplified version of one of my view controllers that might be contributing to the problem:

```swift
class DetailViewController: UIViewController {
    var dataService: DataService?
    var imageCache = [URL: UIImage]()
    var updateTimer: Timer?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dataService = DataService()
        updateTimer = Timer.scheduledTimer(timeInterval: 30.0, target: self, selector: #selector(refreshData), userInfo: nil, repeats: true)
    }
    
    @objc func refreshData() {
        dataService?.fetchLatestData { [weak self] result in
            // Process data and update UI
        }
    }
    
    func loadImage(from url: URL, completion: @escaping (UIImage?) -> Void) {
        if let cachedImage = imageCache[url] {
            completion(cachedImage)
            return
        }
        
        // Download and cache image
        // ...
    }
}
```

Please help me debug this by:
1. Identifying potential memory leak sources in this code using memory management principles
2. Explaining which objects might be creating retain cycles and why
3. Suggesting specific tools or methods to confirm these issues (like Instruments or debug memory graph)
4. Providing corrected code that implements proper memory management practices
5. Recommending a testing approach to verify the fix has resolved the memory leak"

## Exercise 4: Multi-Bug Prioritization

Create debugging prompts for scenarios with multiple potential issues, requesting help with identifying and prioritizing the most critical problems:

1. A web application with performance, security, and usability issues

2. A data processing pipeline with accuracy, efficiency, and scalability problems

3. A mobile app with battery drain, crash, and UI responsiveness issues

4. A machine learning model with overfitting, prediction bias, and runtime efficiency problems

5. A microservice architecture with latency, error handling, and data consistency issues

**Example:**
"I'm debugging a web application that processes and visualizes large datasets for financial analysis. The application has multiple issues that need to be addressed, but I need help identifying which problems are most critical and should be fixed first. Here are the symptoms I'm observing:

1. The initial page load takes 8-12 seconds on a fast connection
2. When filtering data, the UI freezes for 3-5 seconds before updating
3. Memory usage grows continuously during the session, eventually causing the browser tab to crash
4. Some sensitive financial data is being logged to the console
5. The visualization occasionally shows incorrect calculations for certain data points
6. Users report that the application stops responding after being open in a background tab for several hours

Here's a simplified version of our main data processing function that might be contributing to several of these issues:

```javascript
function processFinancialData(rawData) {
  console.log('Processing data:', rawData); // Contains sensitive information
  
  let results = [];
  for (let i = 0; i < rawData.length; i++) {
    let entry = rawData[i];
    let processed = {};
    
    // Deep clone the entry to avoid reference issues
    processed.original = JSON.parse(JSON.stringify(entry));
    
    // Calculate dozens of financial metrics
    processed.metrics = calculateAllMetrics(entry);
    
    // Store all intermediate calculation results for debugging
    processed.calculationSteps = [];
    for (let step of calculationSteps) {
      processed.calculationSteps.push(performCalculation(entry, step));
    }
    
    results.push(processed);
  }
  
  return results;
}
```

Please help me by:
1. Identifying the likely causes of each issue based on the code and symptoms
2. Prioritizing the issues based on severity (security risks, data integrity, user experience impact)
3. Suggesting specific fixes for the highest priority issues
4. Recommending diagnostic approaches to confirm the root causes
5. Outlining a systematic approach to address all issues in the appropriate order"

## Exercise 5: Language/Framework-Specific Debugging

Create debugging prompts tailored to specific programming languages or frameworks, incorporating their unique debugging challenges and best practices:

1. A Python data processing script with type and exception handling issues

2. A React application with component lifecycle and state management problems

3. A SQL database with query performance and data integrity issues

4. A C++ application with memory management and pointer-related bugs

5. A machine learning model implemented in TensorFlow with training and inference issues

**Example:**
"I'm debugging a React application that uses Redux for state management and experiences unexpected behavior with its authentication flow. When a user logs in successfully, they're sometimes immediately logged out again or shown stale data from a previous session. The issue is intermittent and difficult to reproduce consistently.

Here's my authentication reducer:
```javascript
const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token'),
  loading: false,
  error: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
}
```

And here's the relevant part of my login component:
```jsx
function Login() {
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector(state => state.auth);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to dashboard
      history.push('/dashboard');
    }
  }, [isAuthenticated]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const response = await api.login(credentials);
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: { user: response.data.user, token: response.data.token } 
      });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };
  
  // Render form...
}
```

Please help me debug this issue using React and Redux best practices by:
1. Identifying potential causes of the intermittent authentication issues
2. Explaining how Redux state, localStorage, and React component lifecycle might be interacting to cause the problem
3. Suggesting specific fixes that follow React/Redux patterns for authentication
4. Recommending debugging techniques specific to React (like React DevTools or Redux time-travel debugging)
5. Providing guidance on how to make the authentication flow more robust and predictable"

## Exercise 6: Collaborative Debugging Framework

Create a comprehensive prompt template for complex debugging scenarios that facilitates collaborative problem-solving, including:

1. Problem description and context
2. Reproduction steps and environment details
3. Code examples and error messages
4. Attempted solutions and their results
5. Specific questions or areas where you need guidance
6. Preferred format for the response

**Example:**
"# Debugging Collaboration Request

## Problem Overview
I'm experiencing [brief description of the issue] in my [type of application/system]. The main symptom is [primary observable problem], which occurs [frequency or pattern of occurrence].

## Environment Details
- Language/Framework: [version details]
- Operating System: [version details]
- Dependencies: [key libraries and versions]
- Browser/Device (if applicable): [details]

## Reproduction Steps
1. [First step]
2. [Second step]
3. [...]
4. [Last step that triggers the issue]

## Code Example
The issue appears to be related to this component/function:

```[language]
[code block with the suspected problematic code]
```

## Error Messages/Logs
```
[Any error messages, stack traces, or relevant log output]
```

## Expected vs. Actual Behavior
- Expected: [What should happen]
- Actual: [What actually happens]

## Attempted Solutions
I've already tried:
1. [First approach] → Result: [outcome]
2. [Second approach] → Result: [outcome]
3. [...]

## Debugging Data
I've gathered the following information through debugging:
- [Observation 1]
- [Observation 2]
- [...]

## Specific Questions
I'm particularly looking for help with:
1. [Specific question about the problem]
2. [Area where you're stuck]
3. [Particular aspect you want the responder to focus on]

## Preferred Response Format
I'd appreciate a response that includes:
- Root cause analysis
- Explanation of the underlying issue
- Suggested fix with code example
- Prevention strategies for similar issues in the future

Thank you for your help!"
