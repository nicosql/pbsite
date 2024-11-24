import{S as zr,i as Mr,s as Xr,k as g,q as c,a,y as s,l as b,m as y,r as $,h as t,c as i,z as l,n as mr,b as o,G as n,A as d,H as Yr,g as m,d as p,B as f}from"../chunks/index.a7566c1a.js";import{H as u}from"../chunks/HeadingLink.20322812.js";import{C as k}from"../chunks/CodeBlock.a090ee9b.js";import{T as Zr}from"../chunks/Toc.c31a36b6.js";function et(jr){let F,pr,ve,S,Re,_,De,w,fr,$e,cr,$r,x,ur,gr,Fe,C,xe,A,Ee,O,Se,T,_e,B,Ce,I,Ae,h,Oe,P,Te,N,Be,v,br,ue,yr,kr,se,wr,vr,Ie,q,he,L,Pe,G,Ne,U,qe,H,Le,K,Ge,V,Ue,W,He,J,Ke,Q,Ve,j,We,z,Je,M,Qe,X,je,Y,ze,Z,Me,ee,Xe,re,Ye,te,Ze,oe,er,R,Rr,ge,Dr,Fr,be,xr,Er,rr,D,Sr,ye,_r,Cr,ke,Ar,Or,tr,le,Tr,or,ae,ar,ie,ir,E,Br,we,Ir,hr,nr,de,Pr,sr,ne,lr;return S=new Zr({}),_=new u({props:{title:"Get/Set record fields"}}),C=new k({props:{language:"go",content:`
        // export the public safe record fields as map[string]any
        record.PublicExport()

        // returns a new model copy populated with the original/intial record data
        // (could be useful if you want to compare old and new field values)
        record.OriginalCopy()

        // returns a copy of the current record model populated only
        // with its latest data state and everything else reset to the defaults
        record.CleanCopy()

        // set the value of a single record field
        record.Set("someField", 123)

        // bulk set fields from a map
        record.Load(data)

        // retrieve a single record field value
        record.Get("someField")            // -> as any
        record.GetBool("someField")        // -> as bool
        record.GetString("someField")      // -> as string
        record.GetInt("someField")         // -> as int
        record.GetFloat("someField")       // -> as float64
        record.GetTime("someField")        // -> as time.Time
        record.GetDateTime("someField")    // -> as types.DateTime
        record.GetStringSlice("someField") // -> as []string

        // unmarshal a single json field value into the provided result
        record.UnmarshalJSONField("someJsonField", &result)

        // retrieve a single or multiple expanded data
        record.ExpandedOne("author")     // -> as nil|*models.Record
        record.ExpandedAll("categories") // -> as []*models.Record

        // auth records only
        // ---
        record.SetPassword("123456")
        record.ValidatePassword("123456")
        record.PasswordHash()
        // ---
        record.Username()
        record.SetUsername("john.doe")
        // ---
        record.Email()
        record.SetEmail("test@example.com")
        // ---
        record.EmailVisibility()
        record.SetEmailVisibility(false)
        // ---
        record.Verified()
        record.SetVerified(false)
        // ---
        record.TokenKey()
        record.SetTokenKey("ABCD123")
        record.RefreshTokenKey() // sets autogenerated TokenKey
        // ---
        record.LastResetSentAt()
        record.SetLastResetSentAt(types.DateTime{})
        // ---
        record.LastVerificationSentAt()
        record.SetLastVerificationSentAt(types.DateTime{})
    `}}),A=new u({props:{title:"Fetch records"}}),O=new u({props:{title:"Fetch single record",tag:"h5"}}),T=new k({props:{language:"go",content:`
        // retrieve a single "articles" collection record by its id
        record, err := app.Dao().FindRecordById("articles", "RECORD_ID")

        // retrieve a single "articles" collection record by a single key-value pair
        record, err := app.Dao().FindFirstRecordByData("articles", "slug", "test")

        // retrieve a single "articles" collection record by a string filter expression
        // (use "{:placeholder}" to safely bind untrusted user input parameters)
        record, err := app.Dao().FindFirstRecordByFilter(
            "articles", "status = 'public' && category = {:category}",
            dbx.Params{ "category": "news" },
        )
    `}}),B=new u({props:{title:"Fetch multiple records",tag:"h5"}}),I=new k({props:{language:"go",content:`
        // retrieve multiple "articles" collection records by their ids
        records, err := app.Dao().FindRecordsByIds("articles", []string{"RECORD_ID1", "RECORD_ID2"})

        // retrieve multiple "articles" collection records by a custom dbx expression(s)
        records, err := app.Dao().FindRecordsByExpr("articles",
            dbx.NewExp("LOWER(username) = {:username}", dbx.Params{"username": "John.Doe"}),
            dbx.HashExp{"status": "pending"},
        )

        // retrieve multiple "articles" collection records by a string filter expression
        // (use "{:placeholder}" to safely bind untrusted user input parameters)
        records, err := app.Dao().FindRecordsByFilter(
            "articles",                                    // collection
            "status = 'public' && category = {:category}", // filter
            "-publised",                                   // sort
            10,                                            // limit
            0,                                             // offset
            dbx.Params{ "category": "news" },              // optional filter params
        )
    `}}),h=new u({props:{title:"Fetch auth records",tag:"h5"}}),P=new k({props:{language:"go",content:`
        // retrieve a single auth collection record by its email
        user, err := app.Dao().FindAuthRecordByEmail("users", "test@example.com")

        // retrieve a single auth collection record by its username (case insensitive)
        user, err := app.Dao().FindAuthRecordByUsername("users", "John.Doe")

        // retrieve a single auth collection record by its JWT (auth, password reset, etc.)
        user, err := app.Dao().FindAuthRecordByToken("JWT_TOKEN", app.Settings().RecordAuthToken.Secret)
    `}}),N=new u({props:{title:"Custom record query",tag:"h5"}}),q=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/dbx"
            "github.com/pocketbase/pocketbase/daos"
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        func FindActiveArticles(dao *daos.Dao) ([]*models.Record, error) {
            query := dao.RecordQuery("articles").
                AndWhere(dbx.HashExp{"status": "active"}).
                OrderBy("published DESC").
                Limit(10)

            records := []*models.Record{}
            if err := query.All(&records); err != nil {
                return nil, err
            }

            return records, nil
        }
    `}}),L=new u({props:{title:"Create new record"}}),G=new u({props:{title:"Create new record WITHOUT data validations",tag:"h5"}}),U=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        collection, err := app.Dao().FindCollectionByNameOrId("articles")
        if err != nil {
            return err
        }

        record := models.NewRecord(collection)

        // set individual fields
        // or bulk load with record.Load(map[string]any{...})
        record.Set("title", "Lorem ipsum")
        record.Set("active", true)
        record.Set("someOtherField", 123)

        if err := app.Dao().SaveRecord(record); err != nil {
            return err
        }
    `}}),H=new u({props:{title:"Create new record WITH data validations",tag:"h5"}}),K=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/pocketbase/forms"
            "github.com/pocketbase/pocketbase/models"
        )

        ...

        collection, err := app.Dao().FindCollectionByNameOrId("articles")
        if err != nil {
            return err
        }

        record := models.NewRecord(collection)

        form := forms.NewRecordUpsert(app, record)

        // or form.LoadRequest(r, "")
        form.LoadData(map[string]any{
            "title": "Lorem ipsum",
            "active": true,
            "someOtherField": 123,
        })

        // manually upload file(s)
        f1, _ := filesystem.NewFileFromPath("/path/to/file1")
        f2, _ := filesystem.NewFileFromPath("/path/to/file2")
        form.AddFiles("yourFileField1", f1, f2)

        // or mark file(s) for deletion
        form.RemoveFiles("yourFileField2", "demo_xzihx0w.png")

        // validate and submit (internally it calls app.Dao().SaveRecord(record) in a transaction)
        if err := form.Submit(); err != nil {
            return err
        }
    `}}),V=new u({props:{title:"Intercept record before create API hook",tag:"h5"}}),W=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnRecordBeforeCreateRequest("articles").Add(func(e *core.RecordCreateEvent) error {
            admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
            if admin != nil {
                return nil // ignore for admins
            }

            // overwrite the submitted "active" field value to false
            e.Record.Set("active", false)

            // or you can also prevent the create event by returning an error, eg.:
            if (e.Record.GetString("status") != "pending") {
                return apis.NewBadRequestError("status must be pending", nil)
            }

            return nil
        })
    `}}),J=new u({props:{title:"Update existing record"}}),Q=new u({props:{title:"Update record WITHOUT data validations",tag:"h5"}}),j=new k({props:{language:"go",content:`
        record, err := app.Dao().FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        // set individual fields
        // or bulk load with record.Load(map[string]any{...})
        record.Set("title", "Lorem ipsum")
        record.Set("active", true)
        record.Set("someOtherField", 123)

        if err := app.Dao().SaveRecord(record); err != nil {
            return err
        }
    `}}),z=new u({props:{title:"Update record WITH data validations",tag:"h5"}}),M=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/pocketbase/forms"
        )

        ...

        record, err := app.Dao().FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        form := forms.NewRecordUpsert(app, record)

        // or form.LoadRequest(r, "")
        form.LoadData(map[string]any{
            "title": "Lorem ipsum",
            "active": true,
            "someOtherField": 123,
        })

        // validate and submit (internally it calls app.Dao().SaveRecord(record) in a transaction)
        if err := form.Submit(); err != nil {
            return err
        }
    `}}),X=new u({props:{title:"Intercept record before update API hook",tag:"h5"}}),Y=new k({props:{language:"go",content:`
        import (
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
        )

        ...

        app.OnRecordBeforeUpdateRequest("articles").Add(func(e *core.RecordUpdateEvent) error {
            admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
            if admin != nil {
                return nil // ignore for admins
            }

            // overwrite the submitted "active" field value to false
            e.Record.Set("active", false)

            // or you can also prevent the create event by returning an error, eg.:
            if (e.Record.GetString("status") != "pending") {
                return apis.NewBadRequestError("status must be pending.", nil)
            }

            return nil
        })
    `}}),Z=new u({props:{title:"Delete record"}}),ee=new k({props:{language:"go",content:`
        record, err := app.Dao().FindRecordById("articles", "RECORD_ID")
        if err != nil {
            return err
        }

        if err := app.Dao().DeleteRecord(record); err != nil {
            return err
        }
    `}}),re=new u({props:{title:"Transaction"}}),te=new k({props:{language:"go",content:`
        titles := []string{"title1", "title2", "title3"}

        collection, err := app.Dao().FindCollectionByNameOrId("articles")
        if err != nil {
            return err
        }

        app.Dao().RunInTransaction(func(txDao *daos.Dao) error {
            // create new record for each title
            for _, title := range titles {
                record := models.NewRecord(collection)
                record.Set("title", title)

                if err := txDao.SaveRecord(record); err != nil {
                    return err
                }
            }

            return nil
        })
    `}}),oe=new u({props:{title:"Programmatically expanding relations"}}),ae=new k({props:{language:"go",content:`
        record, err := app.Dao().FindFirstRecordByData("articles", "slug", "lorem-ipsum")
        if err != nil {
            return err
        }

        // expand the "author" and "categories" relations
        if errs := app.Dao().ExpandRecord(record, []string{"author", "categories"}, nil); len(errs) > 0 {
            return fmt.Errorf("failed to expand: %v", errs)
        }

        // print the expanded records
        log.Println(record.ExpandedOne("author"))
        log.Println(record.ExpandedAll("categories"))
    `}}),ie=new u({props:{title:"Check if record can be accessed"}}),ne=new k({props:{language:"go",content:`
        package main

        import (
            "log"
            "net/http"

            "github.com/labstack/echo/v5"
            "github.com/pocketbase/pocketbase"
            "github.com/pocketbase/pocketbase/apis"
            "github.com/pocketbase/pocketbase/core"
        )

        func main() {
            app := pocketbase.New()

            app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
                e.Router.Add("GET", "/articles/:slug", func(c echo.Context) error {
                    info := apis.RequestInfo(c)

                    slug := c.PathParam("slug")

                    record, err := app.Dao().FindFirstRecordByData("articles", "slug", slug)
                    if err != nil {
                        return apis.NewNotFoundError("", err)
                    }

                    canAccess, err := app.Dao().CanAccessRecord(record, info, record.Collection().ViewRule)
                    if !canAccess {
                        return apis.NewForbiddenError("", err)
                    }

                    return c.JSON(http.StatusOK, record)
                })

                return nil
            })

            if err := app.Start(); err != nil {
                log.Fatal(err)
            }
        }
    `}}),{c(){F=g("p"),pr=c(`The most common task when using PocketBase as framework probably would be querying and working with your
    collection records.`),ve=a(),s(S.$$.fragment),Re=a(),s(_.$$.fragment),De=a(),w=g("p"),fr=c("All available "),$e=g("code"),cr=c("models.Record"),$r=c(` getter and setters are listed in the
    `),x=g("a"),ur=c(`godoc of the model
    `),gr=c(", but below you could find some examples:"),Fe=a(),s(C.$$.fragment),xe=a(),s(A.$$.fragment),Ee=a(),s(O.$$.fragment),Se=a(),s(T.$$.fragment),_e=a(),s(B.$$.fragment),Ce=a(),s(I.$$.fragment),Ae=a(),s(h.$$.fragment),Oe=a(),s(P.$$.fragment),Te=a(),s(N.$$.fragment),Be=a(),v=g("p"),br=c(`In addition to the above read and write helpers, you can also create custom Record model queries using
    `),ue=g("code"),yr=c("Dao.RecordQuery(collection)"),kr=c(`
    method. It returns a DB builder that can be used with the same methods described in the
    `),se=g("a"),wr=c("Database guide"),vr=c("."),Ie=a(),s(q.$$.fragment),he=a(),s(L.$$.fragment),Pe=a(),s(G.$$.fragment),Ne=a(),s(U.$$.fragment),qe=a(),s(H.$$.fragment),Le=a(),s(K.$$.fragment),Ge=a(),s(V.$$.fragment),Ue=a(),s(W.$$.fragment),He=a(),s(J.$$.fragment),Ke=a(),s(Q.$$.fragment),Ve=a(),s(j.$$.fragment),We=a(),s(z.$$.fragment),Je=a(),s(M.$$.fragment),Qe=a(),s(X.$$.fragment),je=a(),s(Y.$$.fragment),ze=a(),s(Z.$$.fragment),Me=a(),s(ee.$$.fragment),Xe=a(),s(re.$$.fragment),Ye=a(),s(te.$$.fragment),Ze=a(),s(oe.$$.fragment),er=a(),R=g("p"),Rr=c(`To expand record relations programmatically you can use the
    `),ge=g("code"),Dr=c("app.Dao().ExpandRecord(record, expands, customFetchFunc)"),Fr=c(` or
    `),be=g("code"),xr=c("app.Dao().ExpandRecords(records, expands, customFetchFunc)"),Er=c(`
    methods.`),rr=a(),D=g("p"),Sr=c(`Once loaded, you can access the expanded relations via
    `),ye=g("code"),_r=c("record.ExpandedOne(relName)"),Cr=c(` or
    `),ke=g("code"),Ar=c("record.ExpandedAll(relName)"),Or=c(" methods."),tr=a(),le=g("p"),Tr=c("For example:"),or=a(),s(ae.$$.fragment),ar=a(),s(ie.$$.fragment),ir=a(),E=g("p"),Br=c(`To check whether a custom client request or user can access a single record, you can use the
    `),we=g("code"),Ir=c("app.Dao().CanAccessRecord(record, requestInfo, rule)"),hr=c(" method."),nr=a(),de=g("p"),Pr=c("For example:"),sr=a(),s(ne.$$.fragment),this.h()},l(e){F=b(e,"P",{});var r=y(F);pr=$(r,`The most common task when using PocketBase as framework probably would be querying and working with your
    collection records.`),r.forEach(t),ve=i(e),l(S.$$.fragment,e),Re=i(e),l(_.$$.fragment,e),De=i(e),w=b(e,"P",{});var me=y(w);fr=$(me,"All available "),$e=b(me,"CODE",{});var Nr=y($e);cr=$(Nr,"models.Record"),Nr.forEach(t),$r=$(me,` getter and setters are listed in the
    `),x=b(me,"A",{href:!0,target:!0,rel:!0});var qr=y(x);ur=$(qr,`godoc of the model
    `),qr.forEach(t),gr=$(me,", but below you could find some examples:"),me.forEach(t),Fe=i(e),l(C.$$.fragment,e),xe=i(e),l(A.$$.fragment,e),Ee=i(e),l(O.$$.fragment,e),Se=i(e),l(T.$$.fragment,e),_e=i(e),l(B.$$.fragment,e),Ce=i(e),l(I.$$.fragment,e),Ae=i(e),l(h.$$.fragment,e),Oe=i(e),l(P.$$.fragment,e),Te=i(e),l(N.$$.fragment,e),Be=i(e),v=b(e,"P",{});var pe=y(v);br=$(pe,`In addition to the above read and write helpers, you can also create custom Record model queries using
    `),ue=b(pe,"CODE",{});var Lr=y(ue);yr=$(Lr,"Dao.RecordQuery(collection)"),Lr.forEach(t),kr=$(pe,`
    method. It returns a DB builder that can be used with the same methods described in the
    `),se=b(pe,"A",{href:!0});var Gr=y(se);wr=$(Gr,"Database guide"),Gr.forEach(t),vr=$(pe,"."),pe.forEach(t),Ie=i(e),l(q.$$.fragment,e),he=i(e),l(L.$$.fragment,e),Pe=i(e),l(G.$$.fragment,e),Ne=i(e),l(U.$$.fragment,e),qe=i(e),l(H.$$.fragment,e),Le=i(e),l(K.$$.fragment,e),Ge=i(e),l(V.$$.fragment,e),Ue=i(e),l(W.$$.fragment,e),He=i(e),l(J.$$.fragment,e),Ke=i(e),l(Q.$$.fragment,e),Ve=i(e),l(j.$$.fragment,e),We=i(e),l(z.$$.fragment,e),Je=i(e),l(M.$$.fragment,e),Qe=i(e),l(X.$$.fragment,e),je=i(e),l(Y.$$.fragment,e),ze=i(e),l(Z.$$.fragment,e),Me=i(e),l(ee.$$.fragment,e),Xe=i(e),l(re.$$.fragment,e),Ye=i(e),l(te.$$.fragment,e),Ze=i(e),l(oe.$$.fragment,e),er=i(e),R=b(e,"P",{});var fe=y(R);Rr=$(fe,`To expand record relations programmatically you can use the
    `),ge=b(fe,"CODE",{});var Ur=y(ge);Dr=$(Ur,"app.Dao().ExpandRecord(record, expands, customFetchFunc)"),Ur.forEach(t),Fr=$(fe,` or
    `),be=b(fe,"CODE",{});var Hr=y(be);xr=$(Hr,"app.Dao().ExpandRecords(records, expands, customFetchFunc)"),Hr.forEach(t),Er=$(fe,`
    methods.`),fe.forEach(t),rr=i(e),D=b(e,"P",{});var ce=y(D);Sr=$(ce,`Once loaded, you can access the expanded relations via
    `),ye=b(ce,"CODE",{});var Kr=y(ye);_r=$(Kr,"record.ExpandedOne(relName)"),Kr.forEach(t),Cr=$(ce,` or
    `),ke=b(ce,"CODE",{});var Vr=y(ke);Ar=$(Vr,"record.ExpandedAll(relName)"),Vr.forEach(t),Or=$(ce," methods."),ce.forEach(t),tr=i(e),le=b(e,"P",{});var Wr=y(le);Tr=$(Wr,"For example:"),Wr.forEach(t),or=i(e),l(ae.$$.fragment,e),ar=i(e),l(ie.$$.fragment,e),ir=i(e),E=b(e,"P",{});var dr=y(E);Br=$(dr,`To check whether a custom client request or user can access a single record, you can use the
    `),we=b(dr,"CODE",{});var Jr=y(we);Ir=$(Jr,"app.Dao().CanAccessRecord(record, requestInfo, rule)"),Jr.forEach(t),hr=$(dr," method."),dr.forEach(t),nr=i(e),de=b(e,"P",{});var Qr=y(de);Pr=$(Qr,"For example:"),Qr.forEach(t),sr=i(e),l(ne.$$.fragment,e),this.h()},h(){mr(x,"href","https://pkg.go.dev/github.com/pocketbase/pocketbase/models#Record"),mr(x,"target","_blank"),mr(x,"rel","noopener noreferrer"),mr(se,"href","/docs/go-database")},m(e,r){o(e,F,r),n(F,pr),o(e,ve,r),d(S,e,r),o(e,Re,r),d(_,e,r),o(e,De,r),o(e,w,r),n(w,fr),n(w,$e),n($e,cr),n(w,$r),n(w,x),n(x,ur),n(w,gr),o(e,Fe,r),d(C,e,r),o(e,xe,r),d(A,e,r),o(e,Ee,r),d(O,e,r),o(e,Se,r),d(T,e,r),o(e,_e,r),d(B,e,r),o(e,Ce,r),d(I,e,r),o(e,Ae,r),d(h,e,r),o(e,Oe,r),d(P,e,r),o(e,Te,r),d(N,e,r),o(e,Be,r),o(e,v,r),n(v,br),n(v,ue),n(ue,yr),n(v,kr),n(v,se),n(se,wr),n(v,vr),o(e,Ie,r),d(q,e,r),o(e,he,r),d(L,e,r),o(e,Pe,r),d(G,e,r),o(e,Ne,r),d(U,e,r),o(e,qe,r),d(H,e,r),o(e,Le,r),d(K,e,r),o(e,Ge,r),d(V,e,r),o(e,Ue,r),d(W,e,r),o(e,He,r),d(J,e,r),o(e,Ke,r),d(Q,e,r),o(e,Ve,r),d(j,e,r),o(e,We,r),d(z,e,r),o(e,Je,r),d(M,e,r),o(e,Qe,r),d(X,e,r),o(e,je,r),d(Y,e,r),o(e,ze,r),d(Z,e,r),o(e,Me,r),d(ee,e,r),o(e,Xe,r),d(re,e,r),o(e,Ye,r),d(te,e,r),o(e,Ze,r),d(oe,e,r),o(e,er,r),o(e,R,r),n(R,Rr),n(R,ge),n(ge,Dr),n(R,Fr),n(R,be),n(be,xr),n(R,Er),o(e,rr,r),o(e,D,r),n(D,Sr),n(D,ye),n(ye,_r),n(D,Cr),n(D,ke),n(ke,Ar),n(D,Or),o(e,tr,r),o(e,le,r),n(le,Tr),o(e,or,r),d(ae,e,r),o(e,ar,r),d(ie,e,r),o(e,ir,r),o(e,E,r),n(E,Br),n(E,we),n(we,Ir),n(E,hr),o(e,nr,r),o(e,de,r),n(de,Pr),o(e,sr,r),d(ne,e,r),lr=!0},p:Yr,i(e){lr||(m(S.$$.fragment,e),m(_.$$.fragment,e),m(C.$$.fragment,e),m(A.$$.fragment,e),m(O.$$.fragment,e),m(T.$$.fragment,e),m(B.$$.fragment,e),m(I.$$.fragment,e),m(h.$$.fragment,e),m(P.$$.fragment,e),m(N.$$.fragment,e),m(q.$$.fragment,e),m(L.$$.fragment,e),m(G.$$.fragment,e),m(U.$$.fragment,e),m(H.$$.fragment,e),m(K.$$.fragment,e),m(V.$$.fragment,e),m(W.$$.fragment,e),m(J.$$.fragment,e),m(Q.$$.fragment,e),m(j.$$.fragment,e),m(z.$$.fragment,e),m(M.$$.fragment,e),m(X.$$.fragment,e),m(Y.$$.fragment,e),m(Z.$$.fragment,e),m(ee.$$.fragment,e),m(re.$$.fragment,e),m(te.$$.fragment,e),m(oe.$$.fragment,e),m(ae.$$.fragment,e),m(ie.$$.fragment,e),m(ne.$$.fragment,e),lr=!0)},o(e){p(S.$$.fragment,e),p(_.$$.fragment,e),p(C.$$.fragment,e),p(A.$$.fragment,e),p(O.$$.fragment,e),p(T.$$.fragment,e),p(B.$$.fragment,e),p(I.$$.fragment,e),p(h.$$.fragment,e),p(P.$$.fragment,e),p(N.$$.fragment,e),p(q.$$.fragment,e),p(L.$$.fragment,e),p(G.$$.fragment,e),p(U.$$.fragment,e),p(H.$$.fragment,e),p(K.$$.fragment,e),p(V.$$.fragment,e),p(W.$$.fragment,e),p(J.$$.fragment,e),p(Q.$$.fragment,e),p(j.$$.fragment,e),p(z.$$.fragment,e),p(M.$$.fragment,e),p(X.$$.fragment,e),p(Y.$$.fragment,e),p(Z.$$.fragment,e),p(ee.$$.fragment,e),p(re.$$.fragment,e),p(te.$$.fragment,e),p(oe.$$.fragment,e),p(ae.$$.fragment,e),p(ie.$$.fragment,e),p(ne.$$.fragment,e),lr=!1},d(e){e&&t(F),e&&t(ve),f(S,e),e&&t(Re),f(_,e),e&&t(De),e&&t(w),e&&t(Fe),f(C,e),e&&t(xe),f(A,e),e&&t(Ee),f(O,e),e&&t(Se),f(T,e),e&&t(_e),f(B,e),e&&t(Ce),f(I,e),e&&t(Ae),f(h,e),e&&t(Oe),f(P,e),e&&t(Te),f(N,e),e&&t(Be),e&&t(v),e&&t(Ie),f(q,e),e&&t(he),f(L,e),e&&t(Pe),f(G,e),e&&t(Ne),f(U,e),e&&t(qe),f(H,e),e&&t(Le),f(K,e),e&&t(Ge),f(V,e),e&&t(Ue),f(W,e),e&&t(He),f(J,e),e&&t(Ke),f(Q,e),e&&t(Ve),f(j,e),e&&t(We),f(z,e),e&&t(Je),f(M,e),e&&t(Qe),f(X,e),e&&t(je),f(Y,e),e&&t(ze),f(Z,e),e&&t(Me),f(ee,e),e&&t(Xe),f(re,e),e&&t(Ye),f(te,e),e&&t(Ze),f(oe,e),e&&t(er),e&&t(R),e&&t(rr),e&&t(D),e&&t(tr),e&&t(le),e&&t(or),f(ae,e),e&&t(ar),f(ie,e),e&&t(ir),e&&t(E),e&&t(nr),e&&t(de),e&&t(sr),f(ne,e)}}}class it extends zr{constructor(F){super(),Mr(this,F,null,et,Xr,{})}}export{it as component};
