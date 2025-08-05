// Simplified example
export default function Dashboard() {
  return (
    <div className="bg-gray-900">
      <Header />
      <div className="grid grid-cols-3">
        {/* Goals Card */}
        <GoalCard title="Code 1hr daily" streak={7} />
        
        {/* Achievement Gallery */}
        <div className="grid grid-cols-4 gap-2">
          <Badge locked={false} icon="💪" title="First Blood" />
          <Badge locked={true} icon="🔥" title="5-Day Inferno" />
        </div>
        
        {/* Duel Challenge Panel */}
        <DuelChallenge opponent="@elonmusk" goal="100 pushups" />
      </div>
    </div>
  )
}