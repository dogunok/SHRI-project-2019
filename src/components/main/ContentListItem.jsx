import React from 'react';
import { Link } from 'react-router-dom';

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
                if(!allInfoFile[key].changed  && infoLog.changedFile.length > 0 && infoLog.changedFile.join('').match(key)){
                    allInfoFile[key].log = infoLog;
                    allInfoFile[key].changed = true;
                    allInfoFile[key].name = key;
                    allInfoFileInArr.push(allInfoFile[key]);
                }
            })
        })
    }

    function splitInformation(){
        addFileNameinObject();

        let intermediateValue = {
            changedFile : []
        };
        const finishValue = [];
        const infoFile = props.info.log;

        infoFile.forEach((info, index) => {
            if(info.length === 0){
                finishValue.push(intermediateValue);
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
                intermediateValue.changedFile.push(info);
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
        const allInfoFile = props.info.fileName;

        for(let i = 0; i < allInfoFile.length; i++){
            if(allInfoFile[i].match(namefile)
            && allInfoFile[i].match('/')
            && !allInfoFile[i].split('/')[allInfoFile[i].split('/').length - 1].match(namefile)){
                return iconFolder;
            }else if(allInfoFile[i].match(namefile)){
                return iconFile;
            }
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
                                <Link to={`${window.location.pathname}/${item.name}`}>
                                    {item.name}
                                </Link>
                            </span>
                        </div>
                        <div className="info-file__hash-commit">
                            <a className="info-file__hash-commit-link" href="#">
                                {item.log.hash}
                            </a>
                        </div>
                        <div className="info-file__commit-message">
                            {item.log.message}
                        </div>
                        <div className="info-file__commiter commiter">
                            {item.log.autor}
                        </div>
                        <div className="info-file__date">
                            {item.log.date}
                        </div>
                    </li>
                ))
            }
        </>
    )
}