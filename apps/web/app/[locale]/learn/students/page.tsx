import { PageHeader } from "@/components/shared/PageHeader";
import { BookOpen, Gamepad2, Award } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Students | Learn | CSRTA",
    description: "Educational resources for primary and secondary students.",
  };
}

export default async function StudentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <PageHeader
        title="For Students"
        description="Discover how you can protect your community's environment through interactive learning."
      />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-blue-600 text-white p-10 rounded-2xl mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome, Future Environmental Leaders!</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Did you know that old electronics and broken fridges shouldn't just be thrown away? Learn why they need special care and how you can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <Gamepad2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Games</h3>
              <p className="text-slate-600 mb-4 text-sm">Play the 'Recycle Hero' game and learn how to sort electronic waste properly.</p>
              <button className="text-blue-600 font-bold hover:underline">Play Now</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Comic Books</h3>
              <p className="text-slate-600 mb-4 text-sm">Follow the adventures of the Eco-Squad as they stop the toxic dumpers!</p>
              <button className="text-blue-600 font-bold hover:underline">Read Comics</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quizzes</h3>
              <p className="text-slate-600 mb-4 text-sm">Test your knowledge and earn digital badges to show off your eco-skills.</p>
              <button className="text-blue-600 font-bold hover:underline">Take a Quiz</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
