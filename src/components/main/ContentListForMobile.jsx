import React from 'react';
import iconFolder from '../../picture/iconFolder.svg';
import iconInstruction from '../../picture/iconInstruction.svg';
import iconFile from '../../picture/iconFile.svg';

export default function ContentListItem(props){
    const allInfoFile = {};
    const allInfoFileInArr = [];
    function addFileNameinObject(){
        const fileName = props.info.fileName;
        fileName.forEach(name => {
            if(name.match('/')){
                allInfoFile[name.split('/')[0]] = {};
                allInfoFile[name.split('/')[0]].changed = false;
            } else {
                allInfoFile[name] = {};
                allInfoFile[name].changed = false;
            }
        });
    }

    function addInfoCommit(fn){
        const splitInformation = fn();
        const keysInfoFile = Object.keys(allInfoFile);

        keysInfoFile.forEach(key => {
            splitInformation.map(infoLog => {
                if(!allInfoFile[key].changed  && infoLog.changedFile.length > 0 && infoLog.changedFile.includes(key)){
                    allInfoFile[key] = infoLog;
                    allInfoFile[key].changed = true;
                    allInfoFile[key].name = key;
                    allInfoFileInArr.push(allInfoFile[key]);
                }
            })
        })
    }

    function splitInformation(){
        addFileNameinObject()
        let intermediateValue = {
            changedFile : []
        };
        const finishValue = []
        const infoFile = props.info.log;
        infoFile.forEach((info, index) => {
            if(info.length === 0){
                finishValue.push(intermediateValue)
                intermediateValue = {
                    changedFile : []
                };
            } else if (info.split(':').length > 2){
                const brokenString = info.split(':');
                intermediateValue.hash = brokenString[0];
                intermediateValue.autor = brokenString[1];
                intermediateValue.date = brokenString[2];
                intermediateValue.message = brokenString[3];
            } else {
                intermediateValue.changedFile.push(info.split('/')[0])
                if(infoFile.length - 1 === index){
                    finishValue.push(intermediateValue);
                    intermediateValue = {};
                }
            }
        })
        return finishValue;
    }

    addInfoCommit(splitInformation);

    function choiceIcon(namefile){
        if(namefile.match('.md')){
            return iconInstruction;
        } else if(namefile.match(/\./)){
            return iconFile;
        } else {
            return iconFolder;
        }
    }
    return(
        <>
            {
                allInfoFileInArr.map((item, index) => (
                    <li className="info-file" key={index}>
                        <div className="info-file__type">
                            <img className="info-file__type-picture" src={
                                choiceIcon(item.name)
                            }/>
                            <span className="info-file__name">
                                {item.name}
                            </span>
                        </div>
                        <div className="info-file__hash-commit">
                            <a className="info-file__hash-commit-link" href="#">
                                {item.hash}
                            </a>
                        </div>
                        <div className="info-file__commit-message">
                            {item.message}
                        </div>
                        <div className="info-file__commiter commiter">
                            {item.autor}
                        </div>
                        <div className="info-file__date">
                            {item.date}
                        </div>
                        <ul className="info-file">
                                <li className="name-file name-file-folder">
                                    <div className="picture picture-folder">
                                            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                            </svg>
                                    </div>
                                    api
                                </li>
                                <li><span>ARCADIA-771:</span> convert string to json object</li>
                                <li className="commiter"> <a className="link-commit" href="#">d53dsv</a> 
                                    by Alexey Besedin, 4 s ago</li>
                        </ul>
                    </li>
                ))
            }
        </>
    )
}