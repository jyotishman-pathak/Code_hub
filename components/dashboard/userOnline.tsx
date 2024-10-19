import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const PlayerCards = () => {
  const TotalFriends = 32;

  const players = [
    {
      name: "Olivia Martin",
      email: "Olivia.martin@gmail.com",
      hoursPlayed: "7000+ hours",
      initials: "OM",
    },
    {
        name: "Ram Pandey",
        email: "Ram.pandey.com",
        hoursPlayed: "900+ hours",
        initials: "OM",
      },
      {
        name: "Ram Pandey",
        email: "Ram.pandey.com",
        hoursPlayed: "900+ hours",
        initials: "OM",
      },
      {
        name: "Ram Pandey",
        email: "Ram.pandey.com",
        hoursPlayed: "900+ hours",
        initials: "OM",
      },
    
  ];

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Friends</CardTitle>
        <span className="text-gray-400">Total friends: {TotalFriends}</span>
      </CardHeader>
      <CardDescription className="mt-4 space-y-3">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-pink-600 h-[60px] flex items-center justify-between p-2 rounded-lg"
          >
            <div className="flex items-center">
              <Avatar className="w-[36px] h-[36px]">
                <AvatarFallback>{player.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col ml-3 text-white">
                <h2 className="font-medium">{player.name}</h2>
                <p className="text-sm text-gray-200">{player.email}</p>
              </div>
            </div>
            <div className="text-white">{player.hoursPlayed}</div>
          </div>
        ))}
      </CardDescription>
    </Card>
  );
};

export default PlayerCards;
