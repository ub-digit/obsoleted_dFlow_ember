import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('treenode', params.id);
  },
  actions: {
    deleteNode: function(id) {
      var should_delete = confirm(Ember.I18n.t("nodes.confirm_delete"));
      if (should_delete){
        this.store.destroy('treenode', id).then(
          () => {
            this.transitionTo('index');
          },
          (errorObject) => {
            this.controller.set('error', errorObject.error);
          }
          );
      }
    },
    updateNode: function(model) {
      var that = this;
  	   // If we have a new_parent_id, ask user if it actually should be moved
  	   if(model.new_parent_id && model.new_parent_id !== '') {
        if(model.new_parent_id === 'root') {
          if(!this.get('session.can_manage_tree_root')) {
           alert(Ember.I18n.t("nodes.move_root_denied"));
           return;
         }
         var should_save = confirm(Ember.I18n.t("nodes.move_confirm_root"));
         if(should_save) {
           model.parent_id = null;
           delete model.new_parent_id;
           this.send('saveNode', model);
         }
       } else {
        this.store.find('treenode', model.new_parent_id, {
         show_breadcrumb: true, show_breadcrumb_as_string: true
       }).then(
  			// Fetch parent we want to move object to
  			function(new_model) {
         var should_save = confirm(Ember.I18n.t("nodes.move_confirm") + "\n" + new_model.breadcrumb);
         if(should_save) {
          model.parent_id = model.new_parent_id;
          delete model.new_parent_id;
          that.send('saveNode', model);
        }
      },
  			// Failed to fetch parent (no such node?)
  			function() {
          alert(Ember.I18n.t("nodes.move_parent_not_found"));
        }
       );
     }
   } else {
    this.send('saveNode', model);
  }
},
saveNode: function(model) {
      var that = this; // To be used in nested functions
      this.store.save('treenode', model).then(
        // Success function
        function(model) {
          that.send('refreshModel', model.parent_id); // Refresh children of current model
          that.transitionTo('node.show', model.parent_id);
        },
		// Failed function
    function(errorObject) {
      that.controller.set('error', errorObject.error);
    }
    );
    }
  }
});
