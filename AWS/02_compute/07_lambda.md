# AWS Lambda

## What is AWS Lambda

AWS Lambda is a serverless compute service that allows you to run code 
without provisioning or managing servers.

You upload your code, and Lambda executes it in response to events.

You are charged only for execution time (in milliseconds).

---

## How Lambda Works

1. You upload your function code.
2. Configure a trigger (event source).
3. Lambda runs the function when the event occurs.
4. It automatically scales based on the number of requests.

No server management.
No infrastructure provisioning.

---

## Key Components

### Function
The actual code that runs.

### Runtime
Language environment (Node.js, Python, Java, etc.)

### Trigger
Event that invokes Lambda.

Examples:
- S3 upload
- API Gateway request
- DynamoDB stream
- SNS message
- CloudWatch event

### Execution Role (IAM Role)
Grants Lambda permission to access other AWS services.

---

## Important Configuration

### Memory Allocation
128 MB to 10 GB.
More memory → More CPU power.

### Timeout
Maximum execution time (up to 15 minutes).

### Concurrency
Number of parallel executions allowed.

Reserved concurrency can limit or guarantee capacity.

---

## Scaling Behavior

Lambda automatically scales:

1 request → 1 execution environment  
1000 requests → 1000 parallel environments  

Scaling is automatic and near real-time.

---

## Pricing Model

You pay for:
- Number of requests
- Execution duration (milliseconds)
- Memory allocated

No charge when not running.

---

## Example Services That Commonly Use Lambda

- API Gateway (Serverless APIs)
- S3 (File processing)
- DynamoDB Streams
- SNS / SQS
- CloudWatch Events (EventBridge)
- Cognito triggers

---

## Common Use Cases

- Backend APIs
- Image or video processing
- Real-time file transformation
- Event-driven microservices
- Automation tasks
- Scheduled jobs (cron jobs)

---

## Difference: Lambda vs EC2

| Feature | Lambda | EC2 |
|----------|--------|------|
| Server Management | No | Yes |
| Scaling | Automatic | Manual / Auto Scaling |
| Billing | Per execution | Per running time |
| Max runtime | 15 minutes | Unlimited |
| Best for | Event-driven | Long-running apps |

---

## Limitations

- Max execution time: 15 minutes
- Cold start latency (for first request)
- Stateless by default

---

## Best Practices

- Keep functions small and single-purpose
- Use environment variables for config
- Grant least privilege IAM role
- Monitor with CloudWatch logs
- Use layers for shared dependencies

---

## Interview / Exam Important Notes

- Lambda is stateless.
- Execution role is mandatory.
- Supports event-driven architecture.
- Automatically scales without configuration.
- Memory setting affects CPU allocation.