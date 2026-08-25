import type { Scene } from '../../render-engine'

// §5 cicd — the second AUTOMATE stage: automating how software SHIPS. Manually building and copying
// code to servers is slow and risky; a CI/CD pipeline automates the whole path from a git commit to
// running in production. A developer pushes code; the change triggers the pipeline; CodeBuild compiles
// it and runs the tests (continuous integration); and if they pass, CodeDeploy releases it to the fleet
// — rolling or blue/green, so there's no downtime and a bad release rolls back (continuous delivery).
// CodePipeline is the orchestrator that wires the stages together. Drawn as: commit → CodePipeline
// (Source → Build → Deploy) → production.
export const cicd: Scene = {
  id: 'cicd',
  padding: 0.15,
  nodes: [
    { id: 'dev', label: 'Developer', pattern: 'user', icon: 'code', sub: 'git push' },
    {
      id: 'pipeline',
      label: 'CodePipeline',
      pattern: 'service',
      icon: 'codepipeline',
      sub: 'orchestrates the stages · runs on every commit',
      children: [
        { id: 'source', label: 'Source', pattern: 'service', icon: 'codecommit', sub: 'CodeCommit / GitHub · a change triggers it' },
        { id: 'build', label: 'Build', pattern: 'service', icon: 'codebuild', sub: 'CodeBuild · compile · test · package' },
        { id: 'deploy', label: 'Deploy', pattern: 'service', icon: 'codedeploy', sub: 'CodeDeploy · rolling / blue-green' },
      ],
      edges: [
        { source: 'source', target: 'build' },
        { source: 'build', target: 'deploy' },
      ],
    },
    { id: 'prod', label: 'Production', pattern: 'network', icon: 'ec2', sub: 'running app · EC2 / ECS / Lambda' },
  ],
  // Commit to production, automatically: source change → build & test → deploy, orchestrated end to end.
  edges: [
    { source: 'dev', target: 'source' },
    { source: 'deploy', target: 'prod' },
  ],
}
