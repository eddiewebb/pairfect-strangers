

var HomePreview = createClass({
  // Object fields are simpler than lists - instead of `widgetsFor` returning
  // an array of objects, it returns a single object. Accessing the shape of
  // that object is the same as the shape of objects returned for list fields:
  //
  // {
  //   data: { front_limit: 0, author: 'Chris' },
  //   widgets: { front_limit: (<WidgetComponent>), author: (WidgetComponent>)}
  // }

    subscribed: true,

    getInitialState: function() {
      return {
        'logosrc': '',
      };
    },

    _fetchAsset: function() {
      const path = this.props.entry.getIn(['data','intro', 'logo','path']);
      path &&
        this.props.getAsset(path).then(value => {
          if (this.subscribed) {
            this.setState({ 'logosrc': value.toString() });
          }
        });
    },

    componentDidMount: function() {
      this._fetchAsset();
    },

    componentWillUnmount: function() {
      this.subscribed = false;
    },

    componentDidUpdate: function(prevProps) {
      const prevPath = prevProps.entry.getIn(['data','intro', 'logo']);
      const path = this.props.entry.getIn(['data','intro', 'logo']);
      if (prevPath !== path || prevProps.getAsset !== this.props.getAsset) {
        this._fetchAsset();
      }
    },
  render: function() {
    var entry = this.props.entry;
    var logo = entry.getIn(['data','intro', 'logo']);
    var intro = entry.getIn(['data', 'intro']);
    var news = entry.getIn(['data', 'news']);
    var pricing = entry.getIn(['data', 'pricing']);
    var about = entry.getIn(['data', 'about']);
    var contact = entry.getIn(['data', 'contact']);
    var bg = this.props.widgetsFor('intro').getIn(['data', 'backgroundz']);

    var bz = this.props.widgetsFor('intro').getIn(['widgets','backgroundz']).props.entry
    let newsDiv
    if (news) {
      newsDiv = h('div',{"class":"alert alert-secondary mt-5"}, entry.getIn(['data', 'news']));
    } else {
      newsDiv = "";
    }


    let brandDiv;
    if (logo){
      brandDiv = h('div',{"class":"brand-heading mt-5"}, h('img',{"class":"logo","src":this.state.logosrc}) )
    }else{
      brandDiv = h('h1',{"class":"brand-heading"}, this.props.widgetsFor('intro').getIn(['widgets', 'header']))
    }

    return h('div',{},
      // Intro Section
      h('header', { "class":"masthead", 
                         "style":{  
                            backgroundImage: "url(/uploads/winter.jpg)",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }
                        },
        h('div',{'class':'intro-body'},
          h('div',{'class':'container'},
            h('div',{'class':'row'},
              h('div',{'class':'col-lg-8 mx-auto'},
                h('div',{'class':'improve-contrast-box'},
                  brandDiv,
                  h('p',{'class':'intro-text'},
                    this.props.widgetsFor('intro').getIn(['widgets', 'text'])
                  )
                )
              )
            )
          )
        )


      ) ,
      // About Section
      h('section',{"id":"about","class":"content-section text-center"},
        h('div',{"class":"container"},
          h('div',{"class":"row"},
            h('div',{"class":"col-lg-8 mx-auto"},
                h('h2',{},
                  this.props.widgetsFor('about').getIn(['widgets', 'header'])
                ),
                h('p',{},
                  this.props.widgetsFor('about').getIn(['widgets', 'text'])
                )
            )
          )
        )
      ),
      // Schedule Section
      h('section',{"id":"about","class":"content-section text-center"},
        h('div',{"class":"container"},
          h('div',{"class":"row"},
            h('div',{"class":"col-lg-8 mx-auto"},
                h('h2',{},
                  'Pricing'
                ),
                h('p',{"class":"text-left"},
                  this.props.widgetFor('pricing')
                )
            )
          )
        )
      ),
      // Schedule Section
      h('section',{"id":"schedule","class":"content-section text-center"},
        h('div',{"class":"container"},
          h('div',{"class":"row"},
            h('div',{"class":"col-lg-8 mx-auto"},
                h('h2',{},
                  "Class Schedule"
                ),
                newsDiv ,
                h('div',{},
                  h('strong',{},"Mock Class")," - Mondays 2pm, Thursday 5pm"
                )
            )
          )
        )
      ),


      // Contact Section
      h('section',{"id":"contact","class":"content-section text-center"},
        h('div',{"class":"container"},
          h('div',{"class":"row"},
            h('div',{"class":"col-lg-8 mx-auto"},
                h('h2',{},
                  this.props.widgetsFor('contact').getIn(['widgets', 'header'])
                ),
                h('p',{},
                  this.props.widgetsFor('contact').getIn(['widgets', 'text'])
                )
            )
          )
        )
      )

    )



  }
});

export default HomePreview;