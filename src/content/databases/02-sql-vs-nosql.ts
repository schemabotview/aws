import type { Section } from '../types'

export const sqlVsNosql: Section = {
  id: 'sql-vs-nosql',
  title: 'SQL vs NoSQL — two shapes of data',
  scene: 'sql-vs-nosql',
  slide: `## SQL vs NoSQL — two shapes of data

A managed database (§1) still leaves the big question: **which shape?** Match the model to how your data is **structured and accessed**.

### Relational (SQL) — RDS · Aurora
- **Fixed schema**: tables of rows & columns, related by keys, queried with **joins** and SQL
- **ACID** transactions — strong consistency; the default for structured, interconnected data
- Pick an engine — **MySQL · PostgreSQL · MariaDB · SQL Server · Oracle**; scales **up**, + read replicas

### NoSQL — DynamoDB & the purpose-built family
- **Flexible schema**: key-value items or documents; shape the data around **one known access pattern**
- Scales **out** across many machines — fast lookups & huge throughput at any size
- A family per shape: **DynamoDB** (key-value), **DocumentDB** (documents), **Neptune** (graph), **Keyspaces** (wide-column)

**Rule of thumb:** relational unless a specific scale or access pattern pushes you to NoSQL.`,
  narration:
    "A managed database takes the operational work off your plate, but it still leaves you the most important decision: which shape of database do you actually want? Because data comes in more than one shape, and the two big families are relational — often just called SQL — and NoSQL. Getting this choice right means matching the model to how your data is structured and how your application reads and writes it. Start with relational, the classic one, and the family Amazon RDS and Aurora belong to. A relational database organises data into tables of rows and columns with a fixed, predefined schema. Rows in different tables are linked by keys — a customer has orders, an order has line items — and you query across those relationships with joins, using SQL. It gives you strong ACID transactions, meaning a group of changes either all succeed or all fail, and the data is always consistent. That makes relational the sensible default for structured, interconnected data — orders, users, inventory, anything with clear relationships and a need for correctness. Its main limit is scale: you traditionally grow a relational database by scaling up, moving to a bigger, more powerful instance, and you add read replicas to spread read load. Now NoSQL, and the flagship here is DynamoDB. NoSQL databases relax the rigid schema. Instead of tables and joins, you store items as key-value pairs or as documents, and crucially you shape the data around one known access pattern rather than keeping it perfectly normalised. In exchange, they scale out horizontally, spreading data across many machines, which lets them deliver extremely fast lookups and enormous throughput at essentially any size, with predictable low latency. The trade-off is that you give up flexible ad-hoc joins and some consistency guarantees to get that scale and speed — so NoSQL shines when you have a huge volume of data and a well-understood access pattern, like a session store, a product catalogue, or a high-traffic feed. There are also purpose-built NoSQL engines — DocumentDB for document data, Neptune for graphs — and we'll come back to choosing among the whole family at the end of the course. A good rule of thumb to carry forward: reach for relational by default, and move to NoSQL when a specific scale requirement or access pattern genuinely pushes you there. With the split clear, the next few sections go deep on the managed engines themselves — starting with RDS.",
}
