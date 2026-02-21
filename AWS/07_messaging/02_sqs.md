# 02_sqs.md

# 01. What is Amazon SQS

**Amazon Simple Queue Service (SQS)** is a fully managed **message queuing service** that enables **decoupling of microservices, distributed systems, and serverless applications**.  

- Stores messages until they are **processed by consumers**  
- Guarantees **at-least-once delivery**  
- Supports **Standard and FIFO queues**  

---

# 02. Key Features

- **Message Durability** → Messages stored across multiple AZs  
- **Decoupling** → Producers and consumers operate independently  
- **Multiple Queue Types** → Standard (high throughput), FIFO (order guaranteed)  
- **Dead-Letter Queues (DLQ)** → Handle messages that fail processing  
- **Visibility Timeout** → Prevent multiple consumers from processing the same message  

---

# 03. How SQS Works

1. **Producer sends messages** → to SQS queue  
2. **Queue stores messages** → durably until delivered  
3. **Consumer polls messages** → processes and deletes from queue  
4. **Visibility Timeout** ensures messages are **not processed multiple times**  
5. Failed messages → sent to **DLQ** for troubleshooting  

---

# 04. Queue Types

### 4.1 Standard Queue
- **Unlimited throughput**  
- **At-least-once delivery**, may deliver messages out of order  
- Ideal for most **decoupled workloads**  

### 4.2 FIFO Queue
- **Exactly-once processing**  
- **Preserves message order**  
- Limited throughput (300 transactions/sec without batching)  
- Ideal for **financial transactions, inventory updates**  

---

# 05. Use Cases

- Decoupling microservices  
- Processing asynchronous workloads  
- Buffering requests for **high-traffic applications**  
- Order processing systems → **FIFO queues**  
- Integration with **Lambda for serverless workflows**  

---

# 06. Best Practices

- Use **FIFO queues** for strict ordering and deduplication  
- Configure **dead-letter queues** for failed messages  
- Set appropriate **visibility timeout** based on processing time  
- Monitor **queue metrics** using CloudWatch  
- Batch messages to improve **throughput and reduce costs**  

---

# 07. Interview / Exam Notes

- SQS → **fully managed message queuing**  
- Decouples producers and consumers  
- Standard → high throughput, at-least-once delivery, out-of-order possible  
- FIFO → exactly-once delivery, preserves order  
- DLQ → handle failed messages  
- Visibility timeout → prevents duplicate processing  

---

# 08. Diagram Idea

```text
       [Producer Application]
                |
           [SQS Queue]
        -----------------
        |               |
   [Consumer1]       [Consumer2]
        |               |
    Processes & Deletes Message
                |
           [DLQ for failed messages]