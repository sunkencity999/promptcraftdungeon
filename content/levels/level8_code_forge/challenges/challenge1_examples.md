# Code Generation Prompt Examples

## Basic Code Generation Prompts

### Example 1: Simple Function Creation

**Prompt:**
```
As a JavaScript developer, write a function that converts a temperature from Fahrenheit to Celsius. The function should take a number as input and return a number rounded to one decimal place.
```

**Why it works:**
- Defines the role (JavaScript developer)
- Specifies a clear purpose (temperature conversion)
- Defines input and output types (number)
- Includes a specific requirement (rounding to one decimal)

### Example 2: Function with Error Handling

**Prompt:**
```
As a Python programmer, create a function that divides two numbers. The function should take two parameters (numerator and denominator), handle division by zero errors by returning None, and include docstrings explaining the function's purpose and parameters.
```

**Why it works:**
- Specifies the role (Python programmer)
- Defines a clear purpose (division function)
- Specifies inputs (two parameters)
- Requires error handling (division by zero)
- Includes quality standards (docstrings)

## Intermediate Code Generation Prompts

### Example 3: Algorithm Implementation

**Prompt:**
```
As a software engineer, implement a binary search algorithm in Java that searches for a target value in a sorted array of integers. The function should:
1. Take a sorted array and a target value as parameters
2. Return the index of the target if found, or -1 if not present
3. Use an iterative approach rather than recursion
4. Have O(log n) time complexity
5. Include comments explaining the key steps
6. Handle edge cases like empty arrays or null inputs

Follow standard Java naming conventions and include a brief explanation of the algorithm's efficiency.
```

**Why it works:**
- Defines the role (software engineer)
- Specifies a clear algorithm (binary search)
- Defines language (Java)
- Lists specific requirements (parameters, return values)
- Includes implementation guidance (iterative vs. recursive)
- Specifies performance expectations (O(log n))
- Requires quality standards (comments, naming conventions)
- Asks for edge case handling
- Requests explanation of efficiency

### Example 4: Class Design

**Prompt:**
```
As an object-oriented programmer, create a Python class for managing a simple bank account. The class should:
1. Initialize with an account holder name and starting balance
2. Include methods for deposit, withdrawal, and checking balance
3. Implement proper validation (no negative deposits, no withdrawals exceeding balance)
4. Raise appropriate exceptions with descriptive messages
5. Include a transaction history feature that records all operations
6. Follow PEP 8 style guidelines
7. Include comprehensive docstrings for the class and all methods

The class should demonstrate encapsulation by making appropriate attributes private.
```

**Why it works:**
- Specifies the role (object-oriented programmer)
- Defines language (Python)
- Specifies a clear purpose (bank account management)
- Lists required methods and features
- Includes validation requirements
- Specifies error handling approach (exceptions)
- Requires a specific feature (transaction history)
- Includes quality standards (PEP 8, docstrings)
- Specifies design principles (encapsulation)

## Advanced Code Generation Prompts

### Example 5: Full Component Implementation

**Prompt:**
```
As a React developer, create a form component for user registration that:
1. Collects username, email, password, and password confirmation
2. Implements client-side validation with the following rules:
   - Username: 3-20 characters, alphanumeric and underscores only
   - Email: Valid email format
   - Password: Minimum 8 characters, at least one uppercase, one lowercase, one number
   - Password confirmation: Must match password
3. Shows appropriate error messages below each field
4. Includes a submit button that is disabled until all validations pass
5. Uses React hooks (useState for form data, useEffect for validation)
6. Implements controlled components for all inputs
7. Follows functional component patterns rather than class components
8. Includes proper TypeScript types for all props and state
9. Handles form submission by preventing default behavior and logging form data

Style the component using CSS modules with a clean, accessible design that includes visual feedback for validation states.
```

**Why it works:**
- Specifies the role (React developer)
- Defines a clear purpose (registration form)
- Lists specific fields and validation rules
- Includes UI behavior requirements (error messages, disabled button)
- Specifies technical approach (hooks, controlled components)
- Defines architectural pattern (functional vs. class)
- Includes typing requirements (TypeScript)
- Specifies form handling behavior
- Includes styling guidance

### Example 6: System Integration Code

**Prompt:**
```
As a backend engineer, create a Node.js middleware function for API authentication that:
1. Extracts a JWT token from the Authorization header (format: "Bearer [token]")
2. Verifies the token using the jsonwebtoken library
3. Handles the following error cases with appropriate HTTP status codes:
   - Missing token: 401 with "Authentication required" message
   - Invalid token: 403 with "Invalid or expired token" message
   - Server errors: 500 with generic message (but detailed logging)
4. On successful verification, adds the decoded user information to the request object
5. Works with Express.js request/response pattern
6. Implements async/await pattern with try/catch for error handling
7. Includes comprehensive logging using the winston logger
8. Follows the existing project architecture where:
   - Environment variables are accessed via process.env.JWT_SECRET
   - User lookup is performed via an injected userService
   - Error responses use a standardized errorResponse utility

The code should be optimized for readability and maintainability, with JSDoc comments and modular structure.
```

**Why it works:**
- Specifies the role (backend engineer)
- Defines a clear purpose (API authentication middleware)
- Specifies environment (Node.js, Express)
- Lists specific functionality requirements
- Includes detailed error handling specifications
- Specifies technical patterns (async/await, try/catch)
- Includes integration requirements (winston, environment variables)
- Provides architectural context
- Specifies quality standards (readability, JSDoc, modular structure)

## Common Mistakes and Improvements

### Weak Prompt:
```
Write code to sort a list.
```

**Problems:**
- No specified role
- No language specification
- Vague purpose ("sort a list")
- No input/output definitions
- No quality requirements
- No specification of sorting algorithm or performance expectations

### Improved Prompt:
```
As a Python developer, create a function that sorts a list of dictionaries based on a specified key. The function should:
1. Accept two parameters: a list of dictionaries and a string key name
2. Return a new sorted list without modifying the original
3. Handle cases where the key doesn't exist in some dictionaries (place them at the end)
4. Allow for both ascending and descending sort via an optional third boolean parameter
5. Include type hints and docstrings following PEP standards
6. Raise a TypeError if the input is not a list or the key is not a string
7. Optimize for readability over clever solutions

Include a brief comment explaining the time complexity of your implementation.
```

**Improvements:**
- Added specific role (Python developer)
- Defined language (Python)
- Clarified purpose (sorting dictionaries by key)
- Specified inputs and outputs
- Added edge case handling (missing keys)
- Added flexibility (ascending/descending)
- Included quality standards (type hints, docstrings)
- Specified error handling approach
- Added optimization guidance
- Requested complexity analysis
