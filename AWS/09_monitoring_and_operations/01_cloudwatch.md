# 01. Amazon CloudWatch

## 01.1 Definition
Amazon CloudWatch is a **monitoring and observability service** for AWS resources and applications.  
It collects **metrics, logs, and events** to provide operational insights and enables automated responses.

---

## 01.2 Key Features
- **Metrics Monitoring** → CPU, memory, disk, network, custom metrics  
- **Logs** → Centralized collection and analysis of application and system logs  
- **Alarms** → Trigger actions based on thresholds  
- **Events / EventBridge** → Respond to changes in AWS resources  
- **Dashboards** → Visualize metrics across resources  
- **Insights** → Log analytics and anomaly detection  

---

## 01.3 How CloudWatch Works
1. **AWS resources generate metrics/logs** → EC2, Lambda, RDS, S3  
2. **CloudWatch collects metrics/logs**  
3. **Alarms evaluate thresholds** → trigger SNS notifications or auto-scaling  
4. **Dashboards and Insights** provide operational visibility  

---

## 01.4 Use Cases
- Monitor **infrastructure health and performance**  
- Trigger **auto-scaling** based on metrics  
- Track **application errors and exceptions**  
- Centralized **log aggregation** and analysis  
- Create **custom dashboards** for DevOps teams  

---

## 01.5 Best Practices
- Enable **detailed monitoring** for critical resources  
- Set **alarms** for high CPU, memory, or error rates  
- Use **CloudWatch Logs** with structured logging  
- Apply **log retention policies** to optimize costs  
- Integrate with **SNS, Lambda, or EventBridge** for automated responses  
- Build **custom dashboards** for visibility across multiple accounts  

---

## 01.6 Diagram
```text
[AWS Resources: EC2, RDS, Lambda, S3]
                 |
                 v
         [CloudWatch Metrics & Logs]
                 |
       -----------------------------
       |            |              |
     [Alarms]   [Dashboards]   [Events / Actions]
       |            |              |
     [SNS / Lambda / Auto Scaling]