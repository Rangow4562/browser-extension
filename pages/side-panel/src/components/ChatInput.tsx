import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  onStopTask: () => void;
  disabled: boolean;
  showStopButton: boolean;
  setContent?: (setter: (text: string) => void) => void;
  isDarkMode?: boolean;
}

export default function ChatInput({
  onSendMessage,
  onStopTask,
  disabled,
  showStopButton,
  setContent,
  isDarkMode = false,
}: ChatInputProps) {
  const [text, setText] = useState('');
  const isSendButtonDisabled = useMemo(() => disabled || text.trim() === '', [disabled, text]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle text changes and resize textarea
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);

    // Resize textarea
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
    }
  };

  // Expose a method to set content from outside
  useEffect(() => {
    if (setContent) {
      setContent(setText);
    }
  }, [setContent]);

  // Initial resize when component mounts
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 100)}px`;
    }
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (text.trim()) {
        onSendMessage(text);
        setText('');
      }
    },
    [text, onSendMessage],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
        e.preventDefault();
        handleSubmit(e);
      }
    },
    [handleSubmit],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`overflow-hidden rounded-lg border shadow-bem transition-all ${disabled ? 'cursor-not-allowed' : 'focus-within:border-bem-secondary hover:border-bem-secondary'} ${isDarkMode ? 'border-bem-primary/20' : 'border-bem-primary/10'}`}
      aria-label="Chat input form">
      <div className="flex flex-col">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-disabled={disabled}
          rows={5}
          className={`w-full resize-none border-none p-3 focus:outline-none rounded-t-lg transition-colors ${
            disabled
              ? isDarkMode
                ? 'cursor-not-allowed bg-bem-dark text-gray-400'
                : 'cursor-not-allowed bg-gray-100 text-gray-500'
              : isDarkMode
                ? 'bg-bem-dark/90 text-gray-100'
                : 'bg-white/90'
          }`}
          placeholder="What can I help with?"
          aria-label="Message input"
        />

        <div
          className={`flex items-center justify-between px-3 py-2 ${
            disabled ? (isDarkMode ? 'bg-bem-dark' : 'bg-gray-100') : isDarkMode ? 'bg-bem-dark/90' : 'bg-white/90'
          } border-t ${isDarkMode ? 'border-bem-primary/20' : 'border-bem-primary/10'}`}>
          <div className="flex gap-2 text-gray-500">{/* Icons can go here */}</div>

          {showStopButton ? (
            <button
              type="button"
              onClick={onStopTask}
              className="rounded-md bg-red-500 px-4 py-2 text-white font-medium transition-all hover:bg-red-600 hover:shadow-md">
              Stop
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSendButtonDisabled}
              aria-disabled={isSendButtonDisabled}
              className={`rounded-md bg-bem-secondary px-4 py-2 text-white font-medium transition-all hover:enabled:bg-bem-primary hover:enabled:shadow-md ${isSendButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}>
              Send
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
