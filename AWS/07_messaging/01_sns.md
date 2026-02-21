# 01_sns.md

# 01. What is Amazon SNS

**Amazon Simple Notification Service (SNS)** is a fully managed **pub/sub messaging service** that enables **event-driven communication** between distributed systems, microservices, and serverless applications.  

- Publishers send messages → Subscribers receive them  
- Supports multiple **protocols**: HTTP/S, Email, SQS, Lambda, SMS  
- Fully managed → handles **scaling, durability, and message delivery**  

---

# 02. Key Features

- **Pub/Sub Messaging** → Decouple microservices and systems  
- **Fan-out Architecture** → Send a single message to multiple subscribers  
- **Durable Messaging** → Stores messages redundantly across multiple AZs  
- **Multiple Protocols** → HTTP/S, Lambda, SQS, Email, SMS, Mobile push  
- **Filtering & Attributes** → Deliver messages to selective subscribers  

---

# 03. How SNS Works

1. **Create a topic** → Logical access point for messages  
2. **Publish messages** → From applications, services, or AWS services  
3. **Subscribe endpoints** → HTTP/S, SQS, Lambda, Email, SMS  
4. SNS delivers messages to **all subscribers**  
5. Optionally, use **message filtering** to route messages selectively  

---

# 04. Topic & Subscription Components

- **Topic** → Central communication channel  
- **Publisher** → Sends messages to topic  
- **Subscriber** → Receives messages from topic  
- **Subscription** → Connection between topic and subscriber  

---

# 05. Use Cases

- Event-driven microservices communication  
- Fan-out notifications → multiple services or users  
- Alerts and notifications → CloudWatch alarms, system events  
- Serverless workflows → integrate with Lambda  
- Mobile push notifications  

---

# 06. Best Practices

- Use **message filtering** for selective delivery  
- Enable **dead-letter queues (DLQ)** for failed messages  
- Secure topics with **IAM policies** and encryption  
- Monitor message delivery and metrics using **CloudWatch**  
- Combine with **SQS** for guaranteed delivery in critical workflows  

---

# 07. Interview / Exam Notes

- SNS → **pub/sub, fully managed messaging**  
- Publishers send → subscribers receive messages  
- Supports **HTTP/S, Lambda, SQS, Email, SMS**  
- Fan-out → one message to multiple endpoints  
- Use **DLQ, filtering, and monitoring** for reliability  
- Often integrated with **CloudWatch, Lambda, SQS**  

---

# 08. Diagram Idea

```text
        [Publisher Application]
                 |
             [SNS Topic]
      -----------------------
      |          |          |
  [Lambda]     [SQS]      [Email/SMS]
   Subscriber  Subscriber   Subscriber