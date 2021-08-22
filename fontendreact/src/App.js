import "./App.css";
import { useState } from "react";

import AddPostContest from "./components/AddPostContest";
import PostContestList from "./components/PostContestList";
import EditPostContest from "./components/EditPostContest";
import { contests } from "./ContestList";

import BidList from "./components/BidList";
import { bids } from "./BidList";

import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import { projects } from "./ProjectList";

import BidderList from "./components/BidderList";
import { bidders } from "./BidderList";

import{Button}from 'react-bootstrap';
import Header from './Header';
import{BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    useFetch,
    createPostContest,
    deleteContest,
    updateContest,
    DetailsBid,
    createProject,
    deleteProject,
    // Bidder ,
} from "./components/useFetch";
import Navbar from "./components/Navbar";
// import {BidListDetails} from "./components/BidListDetails";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {

    const [contest, setContest] = useState(contests);
    const [project, setProject] = useState(projects);
    const [bid, setBid] = useState(bids);  
    const[bidder,setBidder] = useState(bidders);

    const url = "http://localhost:8000/api/";
    useFetch(url, setContest,setProject,setBid,setBidder);
    
    /*Contest Part*/
    const addPostContest = (newContest) => {
        createPostContest(url, newContest);
        setContest([...contest, newContest]);
    };
    const deleteCon = (id) => {
        deleteContest(url, id);
        const data = contest.filter((user) => user.id !== id);
        setContest(data);
    };

    const editContest = (newCon) => {
        updateContest(url, newCon);
        const data = contest.filter((user) => user.id != newCon.id);
        setContest([...data, newCon]);
    };
    /*Contest Part*/ 
     
    
     
    /*Project part*/
    const addProject = (newProject) => {
        createProject(url, newProject);
        setProject([...project, newProject]);
    };
    const deletePro = (id) => {
        deleteProject(url, id);
        const data = project.filter((user) => user.id !== id);
        setProject(data);
    };
    /*Project Part*/    


    /*Bid List Part*/
          
    /*Bid List Part*/

   
    return (
        <div>
        <BrowserRouter>
        <Header/>
        <Router>
            <Switch>
               
                <Route path="/contestList">
                    <Navbar />
                    <div>
                        <PostContestList contests={contest} callback={deleteCon} />
                    </div>
                </Route>
                <Route path="/postContest">
                    <AddPostContest status="Post Contest" callback={addPostContest} />
                </Route>
                <Route path="/editContest/:id">
                    <EditPostContest status="edit contest" callback={editContest} />
                </Route>

                <Route path="/bidList">
                    <Navbar />
                        <div>
                            <BidList bids={bid}  />
                        </div>
                </Route>
              
                <Route path="/seller_bidingproject" >
                    <div>
                          <BidderList bidders={bidder} />
                    </div>
                </Route>
                <Route path="/login">
    <Login/>
   </Route>

   <Route path="/register">
    <Register/>
   </Route>

                <Route path="/postProject">
                    <AddProject status="Post Project" callback={addProject} />
                </Route>
                <Route path="/projectList">
                    <Navbar />
                    <div>
                        <ProjectList projects={project}  callback={deletePro}/>
                    </div>  
                </Route> 
                  
                 
            </Switch>
        </Router>
        </BrowserRouter>

        </div>
    );
}

export default App;