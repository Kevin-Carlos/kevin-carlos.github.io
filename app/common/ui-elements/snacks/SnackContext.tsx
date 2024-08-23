import {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useState,
} from 'react';

export type Toast = {
  _id: string;
  id?: string;
  message: string;
  important?: boolean;
  timeout?: number;
  _state: {
    closed: 'expired' | 'explicit' | null;
    renewed: boolean;
  };
};

type SnackOptions = {
  messages: Toast[];
  update: (toast: Toast) => void;
  upsert: (toast: Omit<Toast, '_state' | '_id'>) => void;
};

const defaultState: Toast['_state'] = {
  closed: null,
  renewed: false,
};

export const SnackCtx = createContext<
  SnackOptions | null
>(null);

export const SnackProvider = (
  { children }: { children: ReactNode },
): ReactElement => {
  const [messages, setMessages] = useState<Toast[]>([]);

  return (
    <SnackCtx.Provider
      value={{
        messages: messages,
        update: (toast) => {
          setMessages((prev) => {
            return prev.map((p) => p._id === toast._id ? toast : p);
          });
        },
        upsert: (toast) => {
          setMessages((prev) => {
            if (toast.id) {
              return prev.map((p) =>
                p.id === toast.id
                  ? {
                    ...toast,
                    _state: {
                      ...p._state,
                      closed: null,
                      renewed: true,
                    },
                  } as Toast
                  : p
              );
            }

            return [...prev, {
              ...toast,
              _id: Math.ceil(Math.random() * 1000000000).toString(),
              _state: defaultState,
            }];
          });
        },
      }}
    >
      {children}
    </SnackCtx.Provider>
  );
};

export const useToast = (): SnackOptions => {
  const ctx = useContext(SnackCtx);

  if (!ctx) {
    throw new Error('must be used underneath a provider');
  }

  return ctx;
};
