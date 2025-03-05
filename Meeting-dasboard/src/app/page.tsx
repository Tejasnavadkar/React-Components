import Image from "next/image"
import { Calendar, Home, Monitor, Plus, User, Video } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0c0e1f]">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-800 flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded">
            <Video className="h-5 w-5 text-white" />
          </div>
          <span className="text-white text-xl font-semibold">Metly</span>
        </div>

        <div className="mt-6 px-4">
          <p className="text-xs text-gray-400 mb-2 px-2">MAIN MENU</p>

          <div className="space-y-1">
            <button className="w-full flex items-center px-3 py-2 text-left bg-[#172040] text-blue-400 font-normal rounded-md hover:bg-[#1d2648] transition-colors">
              <Home className="mr-2 h-4 w-4" />
              home
            </button>

            <button className="w-full flex items-center px-3 py-2 text-left text-gray-400 font-normal rounded-md hover:bg-[#172040] transition-colors">
              <Calendar className="mr-2 h-4 w-4" />
              Upcomming
            </button>

            <button className="w-full flex items-center px-3 py-2 text-left text-gray-400 font-normal rounded-md hover:bg-[#172040] transition-colors">
              <Calendar className="mr-2 h-4 w-4" />
              Previous
            </button>

            <button className="w-full flex items-center px-3 py-2 text-left text-gray-400 font-normal rounded-md hover:bg-[#172040] transition-colors">
              <Monitor className="mr-2 h-4 w-4" />
              Recordings
            </button>

            <button className="w-full flex items-center px-3 py-2 text-left text-gray-400 font-normal rounded-md hover:bg-[#172040] transition-colors">
              <User className="mr-2 h-4 w-4" />
              Personal room
            </button>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-white text-sm">Your Profile</p>
              <p className="text-gray-400 text-xs">Manage settings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 p-6">
          {/* Notification Banner */}
          <div className="mb-6">
            <div className="bg-[#0f1224] inline-block rounded-md px-4 py-2">
              <p className="text-gray-300">Upcoming meeting at Tomorrow: 2:48 PM</p>
            </div>
          </div>

          {/* Time and Date Display */}
          <div className="mb-10 relative">
            <div className="absolute right-0 top-0 w-[300px] h-[150px] overflow-hidden opacity-80">
              <Image
                src="/placeholder.svg?height=150&width=300"
                width={300}
                height={150}
                alt="Decorative"
                className="object-cover"
              />
            </div>
            <h1 className="text-white text-6xl font-semibold">12:34 PM</h1>
            <p className="text-gray-300 text-xl mt-2">Monday, March 3, 2025</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-white text-xl mb-4">Quick Actions</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-[#172040] rounded-lg p-6 text-center flex flex-col items-center">
                <div className="bg-[#1d2648] p-3 rounded-full mb-4">
                  <Plus className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">New Meeting</h3>
                <p className="text-gray-400 text-xs">Create and start an instant meeting...</p>
              </div>

              <div className="bg-[#172040] rounded-lg p-6 text-center flex flex-col items-center">
                <div className="bg-[#1d2648] p-3 rounded-full mb-4">
                  <User className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Join Meeting</h3>
                <p className="text-gray-400 text-xs">Enter a meeting link to join an existing...</p>
              </div>

              <div className="bg-[#27203f] rounded-lg p-6 text-center flex flex-col items-center">
                <div className="bg-[#31264b] p-3 rounded-full mb-4">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Schedule Meeting</h3>
                <p className="text-gray-400 text-xs">Schedule a meeting</p>
              </div>

              <div className="bg-[#1d1a40] rounded-lg p-6 text-center flex flex-col items-center">
                <div className="bg-[#26224c] p-3 rounded-full mb-4">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">Recordings</h3>
                <p className="text-gray-400 text-xs">Manage recordings</p>
              </div>
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0f1224] rounded-lg p-6">
              <div className="flex items-center gap-4 mb-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <h3 className="text-white font-medium">Valorant match</h3>
                  <p className="text-gray-400 text-xs">Mar 4, 2025, 2:48 PM</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-0 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#0f1224] rounded-lg p-6">
              <div className="flex items-center gap-4 mb-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <h3 className="text-white font-medium">hackathon</h3>
                  <p className="text-gray-400 text-xs">Mar 12, 2025, 12:10 PM</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-0 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-700 border-2 border-[#0f1224] -ml-2 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    width={32}
                    height={32}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 p-4 bg-[#0f1224]">
          {/* Activity Overview */}
          <div className="bg-[#0c0e1f] rounded-lg mb-4 overflow-hidden">
            <div className="p-4 pb-0">
              <h3 className="text-white text-lg font-medium">Activity Overview</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">Meetings</span>
                </div>
                <span className="text-white font-semibold">10</span>
              </div>
            </div>
          </div>

          {/* Next Meeting */}
          <div className="bg-[#0c0e1f] rounded-lg mb-4 overflow-hidden">
            <div className="p-4 pb-2">
              <h3 className="text-gray-300 text-sm font-normal">Next Meeting (1/2)</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-white text-sm">Valorant match</p>
                  <p className="text-gray-400 text-xs">in 1 day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Notes */}
          <div className="bg-[#0c0e1f] rounded-lg overflow-hidden">
            <div className="p-4 pb-2 flex flex-row items-center justify-between">
              <h3 className="text-white text-lg font-medium">Quick Notes</h3>
              <button className="text-gray-400 text-xs hover:text-gray-300">View All Notes</button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Write a note... (Press Enter to save)"
                  className="w-full bg-[#0f1224] border-none rounded-md px-3 py-2 text-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex justify-end">
                  <p className="text-gray-400 text-xs">1 note saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

