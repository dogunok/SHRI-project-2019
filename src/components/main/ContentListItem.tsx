import React from 'react';
import { Link } from 'react-router-dom';

import iconFolder from '../../picture/iconFolder.svg';
import iconFile from '../../picture/iconFile.svg';

interface Props{
    info: {
        fileName: [];
        log: [];
    } ;
}

interface IntermediateValue{
    changedFile?: any;
    hash?: string;
    autor?: string;
    date?: string;
    message?: string;
}

interface FileItem {
    log: {
        message?: string;
        autor?: string;
        date?: string;
        hash?: string;
    };
    name: string;
}



export default function ContentListItem(props: Props){
    const allInfoFile: any = {};
    const allInfoFileInArr: object[] = [];

    function addFileNameinObject(){
        const fileName = props.info.fileName;
        fileName.forEach((name:string) => {
            if(name.match('/')){
                allInfoFile[name.split('/')[0]] = {};
                allInfoFile[name.split('/')[0]].changed = false;
            } else {
                allInfoFile[name] = {};
                allInfoFile[name].changed = false;
            }
        });
    }

    function addInfoCommit(fn: any){
        const splitInformation = fn();
        const keysInfoFile = Object.keys(allInfoFile);

        keysInfoFile.forEach(key => {
            splitInformation.map((infoLog: {changedFile: string[]}) => {
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

        let intermediateValue: IntermediateValue = {
            changedFile : []
        };
        const finishValue:  object[] = [];
        const infoFile = props.info.log;

        infoFile.forEach((info: string, index: number) => {
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

    function choiceIcon(namefile : string){
        const allInfoFile: string[] = props.info.fileName;

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
                allInfoFileInArr.map(() => (fileItem: FileItem, index: number) => (
                    <li className="info-file" key={index}>
                        <div className="info-file__type">
                            <img className="info-file__type-picture" src={
                                choiceIcon(fileItem.name)
                            }/>
                            <span className="info-file__name">
                                <Link to={`${window.location.pathname === '/' ? 'interactiveMap' : window.location.pathname}/${fileItem.name}`}>
                                    {fileItem.name}
                                </Link>
                            </span>
                        </div>
                        <div className="info-file__hash-commit">
                            <a className="info-file__hash-commit-link" href="#">
                                {fileItem.log.hash}
                            </a>
                        </div>
                        <div className="info-file__commit-message">
                            {fileItem.log.message}
                        </div>
                        <div className="info-file__commiter commiter">
                            {fileItem.log.autor}
                        </div>
                        <div className="info-file__date">
                            {fileItem.log.date}
                        </div>
                    </li>
                ))
            }
        </>
    )
}