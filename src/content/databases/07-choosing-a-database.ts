import type { Section } from '../types'

export const choosingADatabase: Section = {
  id: 'choosing-a-database',
  title: 'Choosing a database',
  scene: 'choosing-db',
  slide: `## Choosing a database

Three linked calls — pick the **model**, then the **engine**, then make it **fast**.

### 1 · Relational or NoSQL?
- **Relational** when data is structured & interconnected and you want joins + **ACID** — the safe default
- **NoSQL** when you need massive scale and have a **known access pattern** you can design around

### 2 · Relational → RDS or Aurora?
- **RDS** to run a specific engine (MySQL · PostgreSQL · MariaDB · SQL Server · Oracle), standard & familiar
- **Aurora** for cloud-scale durability, cheap read scaling, fast failover — the usual default for a new build

### 3 · A special shape? Go purpose-built
- **DynamoDB** key-value · **DocumentDB** documents · **Neptune** graph · **Keyspaces** wide-column

### 4 · Then make it fast
- Put **ElastiCache** or **DAX** in front of any of them for microsecond reads

**Rule of thumb:** relational by default → Aurora for new builds → NoSQL/purpose-built when scale or shape demands it → cache the hot reads.`,
  narration:
    "We've covered the whole toolkit now, so let's pull it together into how you actually choose a database, because a real system often uses more than one. Think of it as three linked decisions. The first, and biggest, is relational versus NoSQL. Reach for a relational database — RDS or Aurora — whenever your data is structured and interconnected and you value joins and strong ACID guarantees, which honestly describes the core of most applications; relational is the sensible default, and you should have a reason before you move away from it. Choose NoSQL, led by DynamoDB, when you're facing massive scale or extreme throughput and you have a well-understood access pattern you can design your table around — that's when NoSQL's horizontal scaling and flat, predictable latency really pay off. The second decision only comes up if you went relational: RDS or Aurora? Pick plain RDS when you specifically need one of the standard engines it runs — MySQL, PostgreSQL, MariaDB, SQL Server, or Oracle — configured in a familiar way. Reach for Aurora when you want that cloud-native architecture we saw — the shared distributed storage, six copies across three AZs, cheap read replicas, and fast failover — and because it's MySQL- and PostgreSQL-compatible with better scaling, Aurora is increasingly the default for a brand-new relational workload. The third consideration is whether your data has a special shape that a purpose-built database serves better: DynamoDB for key-value, DocumentDB for document data, Neptune for highly-connected graph data like social networks or recommendations, and Keyspaces for wide-column Cassandra workloads. Using the right specialised engine is almost always easier than bending a general-purpose one to fit. And layered on top of all of these is caching: once you've picked your database, you put ElastiCache or DAX in front of it to serve your hottest reads from memory in microseconds and take load off the database. So the rule of thumb to walk away with is this: default to relational, lean toward Aurora for new builds, move to NoSQL or a purpose-built engine when your scale or your data's shape genuinely demands it, and cache the hot paths. Match the database to your data and your access pattern, and let AWS run it for you — that's the whole of this course in one sentence.",
}
