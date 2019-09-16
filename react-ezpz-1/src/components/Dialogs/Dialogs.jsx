import React from 'react';
import dialogStyles from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={dialogStyles.content}>
            <div className={dialogStyles.dialogs}>
                <div className={dialogStyles.dialogsItems}>
                    <div className={dialogStyles.dialog + ' ' + dialogStyles.active}>
                        Andrey
                    </div>
                    <div className={dialogStyles.dialog}>
                        Viktor
                    </div>
                    <div className={dialogStyles.dialog}>
                        Nikita
                    </div>
                    <div className={dialogStyles.dialog}>
                        Sveta
                    </div>
                    <div className={dialogStyles.dialog}>
                        Sasha
                    </div>
                    <div className={dialogStyles.dialog}>
                        Valera
                    </div>
                </div>
                <div className={dialogStyles.messages}>
                    <div className={dialogStyles.message}>Hi</div>
                    <div className={dialogStyles.message}>How is your react</div>
                    <div className={dialogStyles.message}>Yo</div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;