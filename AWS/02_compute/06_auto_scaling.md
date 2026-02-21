# Auto Scaling

Auto Scaling automatically adjusts the number of EC2 instances 
based on traffic and demand.

It ensures:
- High availability
- Fault tolerance
- Cost optimization

---

## How Auto Scaling Works

1. Create a Launch Template (defines AMI, instance type, etc.)
2. Create an Auto Scaling Group (ASG)
3. Attach Scaling Policies
4. Monitor using CloudWatch metrics

When demand increases → new instances launch  
When demand decreases → instances terminate

---

## Important Configuration

### Minimum Capacity
Minimum number of instances that must always run.

### Maximum Capacity
Maximum number of instances allowed.

### Desired Capacity
The ideal number of instances the system tries to maintain.

Example:
Min = 2  
Desired = 3  
Max = 6  

Auto Scaling will maintain 3 instances normally,  
but can scale up to 6 if required.

---

## Scaling Policies

### Target Tracking
Automatically adjusts instances to maintain a target metric.
Example: Keep CPU at 50%.

### Step Scaling
Scales in steps based on alarm thresholds.

### Scheduled Scaling
Scale at specific times (e.g., office hours).

---

## Health Check

If an instance becomes unhealthy:
- Auto Scaling terminates it
- Automatically launches a new one

Health check sources:
- EC2 status check
- ELB health check