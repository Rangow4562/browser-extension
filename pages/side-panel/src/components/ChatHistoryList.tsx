/* eslint-disable react/prop-types */
import { FaTrash } from 'react-icons/fa';

interface ChatSession {
  id: string;
  title: string;
  createdAt: number;
}

interface ChatHistoryListProps {
  sessions: ChatSession[];
  onSessionSelect: (sessionId: string) => void;
  onSessionDelete: (sessionId: string) => void;
  visible: boolean;
  isDarkMode?: boolean;
}

const ChatHistoryList: React.FC<ChatHistoryListProps> = ({
  sessions,
  onSessionSelect,
  onSessionDelete,
  visible,
  isDarkMode = false,
}) => {
  if (!visible) return null;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="h-full overflow-y-auto p-4 animate-fadeIn">
      <h2 className={`mb-5 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-bem-primary'}`}>Chat History</h2>
      {sessions.length === 0 ? (
        <div
          className={`rounded-xl ${isDarkMode ? 'bg-bem-dark/80 text-gray-400' : 'bg-white/60 text-gray-500'} p-5 text-center backdrop-blur-sm -webkit-backdrop-filter: blur(8px) shadow-bem border ${isDarkMode ? 'border-bem-primary/20' : 'border-bem-primary/10'}`}>
          No chat history available
        </div>
      ) : (
        <div className="space-y-3">
          {sessions.map(session => (
            <div
              key={session.id}
              className={`group relative rounded-xl ${
                isDarkMode ? 'bg-bem-dark/80 hover:bg-bem-dark/60' : 'bg-white/70 hover:bg-white/90'
              } p-4 transition-all backdrop-blur-sm -webkit-backdrop-filter: blur(8px) shadow-bem hover:shadow-bem-md border ${isDarkMode ? 'border-bem-primary/20' : 'border-bem-primary/10'} hover:translate-y-[-2px]`}>
              <button onClick={() => onSessionSelect(session.id)} className="w-full text-left" type="button">
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-bem-secondary'}`}>
                  {session.title}
                </h3>
                <p className={`mt-1 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {formatDate(session.createdAt)}
                </p>
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  onSessionDelete(session.id);
                }}
                className={`absolute right-3 top-3 rounded-full p-1.5 opacity-0 transition-all group-hover:opacity-100 ${
                  isDarkMode
                    ? 'bg-bem-dark text-red-400 hover:bg-red-900/50 hover:text-white'
                    : 'bg-white text-red-500 hover:bg-red-500 hover:text-white'
                } shadow-bem hover:shadow-bem-md`}
                aria-label="Delete session"
                type="button">
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatHistoryList;
