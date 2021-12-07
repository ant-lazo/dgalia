import { Class } from "app/modules/classes/models/class.model";
import { Course } from "app/modules/course/models/course.interface";
import {
  RowAppButtonModel,
  RowButtonType,
} from "app/shared/row-buttons/models/row-nutton.model";
import { CookingScheduleRecipe } from "../models/cooking-schedule-recipe..model";
import { CookingScheduleRegisterForm } from "../models/cooking-schedule-register-form.model";
import { ToastrService } from "ngx-toastr";
import moment from "moment";

export class RegisterPageComponentHelper {
  public static getPageButtons(): RowAppButtonModel[] {
    return [
      new RowAppButtonModel({
        action: "add-recipes",
        color: "primary",
        icon: "library_add",
        label: "Añadir receta",
        type: RowButtonType.Stroked,
      }),
      new RowAppButtonModel({
        action: "cancel",
        color: "primary",
        icon: "close",
        label: "Cancelar",
        type: RowButtonType.Stroked,
      }),
      new RowAppButtonModel({
        action: "register",
        color: "primary",
        icon: "save",
        label: "Registrar",
        type: RowButtonType.Flat,
      }),
    ];
  }

  public static getPageUpdateButtons(): RowAppButtonModel[] {
    return [
      new RowAppButtonModel({
        action: "add-recipes",
        color: "primary",
        icon: "library_add",
        label: "Añadir receta",
        type: RowButtonType.Stroked,
      }),
      new RowAppButtonModel({
        action: "cancel",
        color: "primary",
        icon: "close",
        label: "Cancelar",
        type: RowButtonType.Stroked,
      }),
      new RowAppButtonModel({
        action: "update",
        color: "primary",
        icon: "save",
        label: "Actualizar",
        type: RowButtonType.Flat,
      }),
    ];
  }

  public static getCookingScheduleRegisterForm(data: {
    classes: Class[];
    courses: Course[];
    recipes: CookingScheduleRecipe[];
    form: any;
  }): CookingScheduleRegisterForm {
    return {
      classes: data.classes.map((e) => e.id),
      courses: data.courses.map((e) => e.id),
      date: moment(data.form.date).format(),
      description: data.form.description,
      note: data.form.note,
      recipes: data.recipes.map((recipe) => {
        return { id: recipe.id, quantity: recipe.quantity };
      }),
      term_id: data.form.term_id,
      headquarter_id: data.form.headquarter_id,
    };
  }

  public static validations(data: {
    classes: Class[];
    courses: Course[];
    recipes: CookingScheduleRecipe[];
    toast: ToastrService;
  }): boolean {
    if (!data.classes || data.classes.length == 0) {
      data.toast.error("Debe agregar como mínimo una clase", "error");
      return false;
    }

    if (!data.courses || data.courses.length == 0) {
      data.toast.error("Debe agregar como mínimo un curso", "error");
      return false;
    }

    if (!data.recipes || data.recipes.length == 0) {
      data.toast.error("Debe agregar como mínimo una receta", "error");
      return false;
    }
    return true;
  }
}
