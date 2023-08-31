import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function App() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        <>
            <label>
                Selecciona el chat:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="viaje">viaje</option>
                    <option value="música">música</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'Cerrar chat' : 'Abrir chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    );
}
