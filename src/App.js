import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import UserInfo from "./scenes/userinfo/UserInfo";
import Tickets from "./scenes/tickets/Tickets";
import ViewTickets from "./scenes/tickets/ViewTickets";
import AddNewTicket from "./scenes/tickets/AddNewTicket";
import NewFaq from "./scenes/faq/NewFaq";
import OpenTicket from "./scenes/tickets/OpenTicket";
import ClosedTicket from "./scenes/tickets/ClosedTicket"
import Categories from "./scenes/faq/Categories";
import EditFaq from "./scenes/faq/EditFaq";
import ViewFaq from "./scenes/faq/ViewFaq";
import Products from "./scenes/products/Products";
import AllCategories from "./scenes/faq/AllCategories";
import AddProduct from "./scenes/products/AddProduct";
import EditProduct from "./scenes/products/EditProduct";
import ProductNewCategory from "./scenes/products/ProductNewCategory";
import ProductAllCategories from "./scenes/products/ProductAllCategories";
import NewPricingRules from "./scenes/PricingRules/NewPricingRules";
import AllPricingRules from "./scenes/PricingRules/AllPricingRules";
import EditPricingRule from "./scenes/PricingRules/EditPricingRule";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Blog from "./scenes/blogs/Blog";
import AddBlog from "./scenes/blogs/AddBlog";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation()
  const isLoginPage = location.pathname === "/Login";
  const isSignupPage = location.pathname === "/signup";
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLoginPage && !isSignupPage && < Sidebar isSidebar={isSidebar} />}     
          <main className="content">
          {!isLoginPage && !isSignupPage && < Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/Login" element={<Login />}/>
              <Route path="/signup" element=<SignUp />/>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/newfaq" element={<NewFaq/>}/>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/userinfo" element={<UserInfo />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/viewtickets" element={<ViewTickets />} />
              <Route path="/newticket" element={<AddNewTicket />} />   
              <Route path="/openTickets" element={<OpenTicket />}/> 
              <Route path="/closedTickets" element={<ClosedTicket />}/> 
              <Route path="/newcategory" element={<Categories />}/>
              <Route path="/allcategory" element={<AllCategories />}/>
              <Route path="/editFaq" element={<EditFaq />}/>
              <Route path="/viewFaq" element={<ViewFaq />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/addproduct" element={<AddProduct />}/>
              <Route path="/editproducts" element={<EditProduct />}/>
              <Route path="/productnewcategory" element={<ProductNewCategory />}/>
              <Route path="/productallcategory" element={<ProductAllCategories />}/>
              <Route path="/newpricingrules" element={<NewPricingRules/>}/>
              <Route path="/allpricingrules" element={<AllPricingRules/>}/>
              <Route path="/editpricingrules" element={<EditPricingRule />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/addblog" element={<AddBlog />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
