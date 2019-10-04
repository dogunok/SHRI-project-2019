import React from 'react';

export default function Footer(props){
    return(
        <footer className="footer">
            <div>
                    Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia, 119021
            </div>
            <div className="date">
                <div>
                        UI: 0.1.15
                </div>
                <div className="years">
                        © 2007—2019
                </div>
                <a href="#">Yandex</a>
            </div>
        </footer>
    )
}