define([
  'chaplin',
  'models/base/model',
  'localstorage'
], function(Chaplin, ModelForm) {
  'use strict';

  var Post = ModelForm.extend({

    localStorage: new Backbone.LocalStorage("Post"),

    fields: {
      title: {
        type: ModelForm.fields.CharField,
        default: 'your title',
        label: 'Title :',
        validators: [ModelForm.validators.Alphanumeric]
      },
      content: {
        type: ModelForm.fields.TextField,
        label: 'Content :',
        validators: [ModelForm.validators.Required]
      },
      category: {
        type: ModelForm.fields.SelectField,
        choices: {'c1': 'Category 1', 'c2': 'Category 2'},
        label: 'Category :',
        validators: [ModelForm.validators.Required]
      },
      date: {
        type: ModelForm.fields.DateTimeField,
        label: 'Date :',
        validators: [ModelForm.validators.Required]
      }
    },

    setFormData: function(form_data){
      this.set(_.reduce(form_data, function(result, object){
        result[object.name] = object.value;
        return result;
      }, {}));
      this.save();
    }

  });

  return Post;
});
